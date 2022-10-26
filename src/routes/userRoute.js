const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post(
  "/product",
  upload.fields([{ name: "image", maxCount: 4 }]),
  productController.createProducts
);
module.exports = router;
