const { sequelize } = require("../models");
const orderService = require("../services/orderService");
const transactionService = require("../services/transactionService");
const cartService = require("../services/cartService");
const userService = require("../services/userService");

const { RECEIVED } = require("../config/constants");
const AppError = require("../utils/appError");

exports.getOrdersByBuyerId = async (req, res, next) => {
  try {
    const { id } = req.user;
    const orders = await orderService.getOrdersByBuyer(id);
    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};

exports.getOrdersBySellerId = async (req, res, next) => {
  try {
    const { id } = req.user;
    const orders = await orderService.getOrdersBySeller(id);
    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};

exports.confirmOrder = async (req, res, next) => {
  // const transaction = sequelize.transaction();
  try {
    const { id } = req.user;
    const { orderId } = req.params;
    const { status } = req.body;

    if (status !== RECEIVED) {
      throw new AppError("Invalid status", 400);
    }

    const order = await orderService.completeOrder(id, orderId, status);

    // await transaction.commit();
    res.status(200).json({ order });
  } catch (err) {
    console.log(err);
    // await transaction.rollback();
    next(err);
  }
};

exports.addTrackingNo = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { orderId } = req.params;
    const { status, trackingNo } = req.body;

    const order = await orderService.addTrackingNo(
      id,
      orderId,
      status,
      trackingNo
    );

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

exports.makingPurchase = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { checkoutItems, totalAmount } = req.body;

    if (!checkoutItems || checkoutItems.length < 1) {
      throw new AppError("checkouts must have one or more items", 400);
    }

    const cartIds = checkoutItems.reduce((acc, item) => [...acc, item.id], []);

    const { verifiedCheckoutItems, totalFromCheckout } =
      await cartService.calTotalAmountFromCartItems(cartIds, id);

    if (+totalAmount !== totalFromCheckout * 100) {
      throw new AppError(
        "transaction amount does not match with sum of checkout items",
        400
      );
    }

    const payIn = await transactionService.createPayInTransaction(
      totalFromCheckout,
      id
    );

    res.status(200).json({
      payInId: payIn.id,
      verifiedCheckoutItems
    });
  } catch (err) {
    next(err);
  }
};

exports.completePurchase = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { amount, payInId, transactionId, verifiedCheckoutItems } = req.body;

    if (!verifiedCheckoutItems || verifiedCheckoutItems.length < 1) {
      throw new AppError("checkouts must have one or more items", 400);
    }
    if (!transactionId) {
      throw new AppError("transaction id must be provided", 400);
    }
    if (!payInId) {
      throw new AppError("payIn id must be provided", 400);
    }

    await transactionService.completePayInTransaction(payInId, transactionId);

    await userService.incomeExternalTransfer(1, Math.trunc(amount / 100));

    const orders = await orderService.createOrders(
      verifiedCheckoutItems,
      id,
      payInId,
      next
    );
    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};

exports.rateOrder = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { orderId } = req.params;
    const { status, score } = req.body;

    const order = await orderService.rateOrder(id, orderId, status, score);

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};
