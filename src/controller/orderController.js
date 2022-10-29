const orderService = require("../services/orderService");
const transactionService = require("../services/transactionService");
const cartService = require("../services/cartService");

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

    if (totalAmount !== totalFromCheckout) {
      console.log(`fromReq: ${totalAmount}, verf: ${totalFromCheckout}`);
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
      totalAmount: totalFromCheckout,
      verifiedCheckoutItems
    });
  } catch (err) {
    next(err);
  }
};

exports.completePurchase = async (req, res, next) => {
  try {
    // const { id } = req.user;
    // const { checkouts, transactionId, totalAmount } = req.body;
    // if (!checkouts || checkouts.length < 1) {
    //   throw new AppError("checkouts must have one or more items", 400);
    // }
    // if (!transactionId) {
    //   throw new AppError("transaction id must be provided", 400);
    // }
    // const transaction = await transactionService.payInTransaction(
    //   transactionId,
    //   totalAmount,
    //   id
    // );
    // const totalFromCheckout = checkouts.reduce(
    //   (acc, item) => acc + item.Product.unitPrice * item.count,
    //   0
    // );
    // if (totalAmount !== totalFromCheckout) {
    //   throw new AppError(
    //     "transaction amount does not match with sum of checkout items",
    //     400
    //   );
    // }
    // const orders = await orderService.createOrders(
    //   checkouts,
    //   buyerId,
    //   transaction.id,
    //   next
    // );
    // res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};
