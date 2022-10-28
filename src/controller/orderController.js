const orderService = require("../services/orderService");
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
  try {
    const { id } = req.user;
    const { orderId } = req.params;
    const { status } = req.body;

    if (status !== RECEIVED) {
      throw new AppError("Invalid status", 400);
    }

    const order = await orderService.updateOrder(id, orderId, status);

    res.status(200).json({ order });
  } catch (err) {
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
