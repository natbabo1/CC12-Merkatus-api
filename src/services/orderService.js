const { Order, Product, User } = require("../models");
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
