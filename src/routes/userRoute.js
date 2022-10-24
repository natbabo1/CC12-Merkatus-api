const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();
const upload = require("../middlewares/upload");

router.post(
  "/product",
  upload.array("image", 4),
  productController.createProducts
);
module.exports = router;
