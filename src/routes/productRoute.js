const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.route("/").get(productController.getProducts);
router.route("/:productId").get(productController.getProductById);

module.exports = router;
