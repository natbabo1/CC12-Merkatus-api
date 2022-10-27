const express = require("express");
const productController = require("../controller/productController");
const cartController = require("../controller/cartController");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post(
  "/product",
  upload.fields([{ name: "image", maxCount: 4 }]),
  productController.createProducts
);

router.patch(
  "/product/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "extraImage1", maxCount: 1 },
    { name: "extraImage2", maxCount: 1 },
    { name: "extraImage3", maxCount: 1 },
  ]),
  productController.updateProducts
);

router.delete("/product/:id", productController.deleteProducts);

router
  .route("/cart")
  .post(cartController.createCartItem)
  .get(cartController.getMyCart)
  .put(cartController.putMyCart)
  .delete(cartController.deleteCartItem);
module.exports = router;
