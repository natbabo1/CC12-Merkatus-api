const express = require("express");
const upload = require("../middlewares/upload");
const productController = require("../controller/productController");
const orderController = require("../controller/orderController");
const cartController = require("../controller/cartController");
const router = express.Router();

router.post(
  "/product",
  upload.fields([{ name: "image", maxCount: 4 }]),
  productController.createProducts
);

router.route("/buying").get(orderController.getOrdersByBuyerId);

router.route("/buying/:orderId").patch(orderController.confirmOrder);

router.route("/selling").get(orderController.getOrdersBySellerId);
router.route("/selling/:orderId").patch(orderController.addTrackingNo);
router.route("/selling/products").get(productController.getProductBySeller);

router.patch(
  "/product/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "extraImage1", maxCount: 1 },
    { name: "extraImage2", maxCount: 1 },
    { name: "extraImage3", maxCount: 1 }
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
