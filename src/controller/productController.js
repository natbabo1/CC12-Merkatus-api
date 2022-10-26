const fs = require("fs");
const productService = require("../services/productService");
const { Product, Extraimage } = require("../models");
const cloudinary = require("../utils/cloudinary");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req.query);
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const product = await productService.getProductById(productId);

    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
};

exports.createProducts = async (req, res, next) => {
  try {
    const { productName, productDetail, unitPrice, stock, categoryId } =
      req.body;

    console.log(req.files);
    if (req.files) {
      mainImage = await cloudinary.upload(req.files[0].path);
    }

    const createProducts = await Product.create({
      productName,
      productDetail,
      unitPrice,
      image: mainImage,
      stock,
      categoryId,
      sellerId: req.user.id,
    });

    for (const file of req.files.slice(1)) {
      imageUp = await cloudinary.upload(file.path);
      await Extraimage.create({
        image: imageUp,
        productId: createProducts.id,
      });
    }

    res.status(201).json({ message: "Success create product", createProducts });
  } catch (err) {
    next(err);
  } finally {
    req.files.forEach((element) => {
      fs.unlinkSync(element.path);
    });
  }
};
