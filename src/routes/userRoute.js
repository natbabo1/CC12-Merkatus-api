const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post(
  "/product",
  upload.single("image"),
  productController.createProducts
);
module.exports = router;
