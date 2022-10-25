const express = require("express");
const productController = require("../controller/productController");
const cartController = require("../controller/cartController");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post(
  "/product",
  upload.array("image", 4),
  productController.createProducts
);

router
  .route("/cart")
  .post(cartController.createCartItem)
  .get(cartController.getMyCart)
  .put(cartController.putMyCart)
  .delete(cartController.deleteCartItem);
module.exports = router;
