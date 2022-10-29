const { TRANSFER, PAID } = require("../config/constants");
const { Order, Product, User, sequelize } = require("../models");
const productService = require("../services/productService");
const AppError = require("../utils/appError");

exports.getOrdersByBuyer = async (buyerId) => {
  return Order.findAll({
    where: { buyerId },
    include: Product
  });
};

exports.getOrdersBySeller = async (sellerId) => {
  return Order.findAll({
    include: {
      model: Product,
      where: { sellerId }
    }
  });
};

exports.updateOrder = async (buyerId, orderId, status) => {
  const order = await Order.findOne({ where: { id: orderId, buyerId } });

  if (!order) {
    throw new AppError("order does not exist", 400);
  }

  order.update({ status });

  return order;
};

exports.addTrackingNo = async (sellerId, orderId, status, trackingNo) => {
  if (!trackingNo || !("" + trackingNo).trim()) {
    throw new AppError("tracking no is not provided", 400);
  }

  const order = await Order.findOne({
    where: { id: orderId },
    include: Product
  });

  if (order.status !== PAID || status !== TRANSFER) {
    throw new AppError("order status is invalid", 400);
  }
  if (order.Product.sellerId !== sellerId) {
    throw new AppError("order does not exist", 400);
  }

  await order.update({ status: TRANSFER, trackingNo: trackingNo });

  return order;
};

exports.createOrders = async (checkouts, buyerId, payInId, next) => {
  const transaction = await sequelize.transaction();
  try {
    const orders = [];

    for await (const item of checkouts) {
      const product = await productService.getProductById(item.productId);
      const order = await Order.create(
        {
          status: PAID,
          date: new Date(),
          amount: item.count,
          totalPrice: item.count * item.Product.unitPrice,
          buyerId,
          productId: item.Product.id,
          payInId
        },
        { transaction }
      );
      orders.push(order);
    }
    await transaction.commit();
    return orders;
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};
