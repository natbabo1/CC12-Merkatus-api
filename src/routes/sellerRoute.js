const express = require("express");
const sellerController = require("../controller/sellerController");

const router = express.Router();

router.route("/:sellerId").get(sellerController.getSellerById);

module.exports = router;
