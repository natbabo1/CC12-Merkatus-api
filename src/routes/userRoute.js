const express = require("express");
const upload = require("../middlewares/upload");
const productController = require("../controller/productController");
const orderController = require("../controller/orderController");
const router = express.Router();

router.post(
  "/product",
  upload.array("image", 4),
  productController.createProducts
);

router.route("/buying").get(orderController.getOrdersByBuyerId);

router.route("/buying/:orderId").patch(orderController.confirmOrder);

router.route("/selling").get(orderController.getOrdersBySellerId);
router.route("/selling/products").get(productController.getProductBySeller);

module.exports = router;
