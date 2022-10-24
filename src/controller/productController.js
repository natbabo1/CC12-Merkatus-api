const fs = require("fs");
const productService = require("../services/productService");
const { Product } = require("../models");
const cloudinary = require("../utils/cloudinary");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req.query);
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.createProducts = async (req, res, next) => {
  try {
    const { productName, productDetail, unitPrice, stock, categoryId } =
      req.body;

    if (req.file) {
      imageUpload = await cloudinary.upload(req.file.path);
    }

    const createProducts = await Product.create({
      productName,
      productDetail,
      unitPrice,
      image: imageUpload,
      stock,
      categoryId,
      sellerId: req.user.id,
    });

    res.status(201).json({ message: "Success create product", createProducts });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};
