const express = require("express");
const paymentController = require("../controller/paymentController");
const orderController = require("../controller/orderController");
const router = express.Router();

router.post(
  "/",
  paymentController.paymentWithCreditCard,
  orderController.completePurchase
);

module.exports = router;
