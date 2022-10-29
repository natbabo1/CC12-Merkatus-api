const express = require("express");
const paymentController = require("../controller/paymentController");
const router = express.Router();
router.post("/", paymentController.paymentWithCreditCard);
module.exports = router;
