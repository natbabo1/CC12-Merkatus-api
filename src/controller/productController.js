const fs = require("fs");
const productService = require("../services/productService");
const { Product, Extraimage, sequelize } = require("../models");
const cloudinary = require("../utils/cloudinary");
const AppError = require("../utils/appError");
// const { image } = require("../config/cloudinary");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req.query);
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getProductBySeller = async (req, res, next) => {
  try {
    const { id } = req.user;
    const products = await productService.getSellerProducts(id);
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

    if (req.files) {
      mainImage = await cloudinary.upload(req.files.image[0].path);
    }

    const createProducts = await Product.create({
      productName,
      productDetail,
      unitPrice,
      image: mainImage,
      stock,
      categoryId,
      sellerId: req.user.id
    });

    for (const file of req.files.image.slice(1)) {
      imageUp = await cloudinary.upload(file.path);
      await Extraimage.create({
        image: imageUp,
        productId: createProducts.id
      });
    }

    res.status(201).json({ message: "Success create product", createProducts });
  } catch (err) {
    next(err);
  } finally {
    for (const file of req.files.image) {
      fs.unlinkSync(file.path);
    }
  }
};

exports.updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      productName,
      productDetail,
      unitPrice,
      stock,
      categoryId
      // id: extraImageId,
    } = req.body;
    const extraImage1 = await productService.getExtraImage(id);

    if (req.files.image) {
      const productImageMain = await productService.getProductById(id);
      mainImage = await cloudinary.upload(
        req.files.image[0].path,
        productImageMain.dataValues.image
          ? cloudinary.getPublicId(productImageMain.dataValues.image)
          : undefined
      );
      fs.unlinkSync(req.files.image[0].path);
    }

    if (req.files.extraImage1) {
      console.log(extraImage1);
      imageUp1 = await cloudinary.upload(
        req.files.extraImage1[0].path,
        extraImage1[0].dataValues.image
          ? cloudinary.getPublicId(extraImage1[0].dataValues.image)
          : undefined
      );
      fs.unlinkSync(req.files.extraImage1[0].path);
    }

    if (req.files.extraImage2) {
      imageUp2 = await cloudinary.upload(
        req.files.extraImage2[0].path,
        extraImage1[1].dataValues.image
          ? cloudinary.getPublicId(extraImage1[1].dataValues.image)
          : undefined
      );
      fs.unlinkSync(req.files.extraImage2[0].path);
    }

    if (req.files.extraImage3) {
      imageUp3 = await cloudinary.upload(
        req.files.extraImage3[0].path,
        extraImage1[2].dataValues.image
          ? cloudinary.getPublicId(extraImage1[2].dataValues.image)
          : undefined
      );
      fs.unlinkSync(req.files.extraImage3[0].path);
    }

    const updatePropro = await Product.update(
      {
        productName,
        productDetail,
        unitPrice,
        image: mainImage,
        stock,
        categoryId
      },
      { where: { id: id, sellerId: req.user.id } }
    );

    const updateextra = await Extraimage.update(
      {
        image: imageUp1
      },
      { where: { id: extraImage1[0].dataValues.id, productId: id } }
    );

    const updateextra2 = await Extraimage.update(
      {
        image: imageUp2
      },
      { where: { id: extraImage1[1].dataValues.id, productId: id } }
    );

    const updateextra3 = await Extraimage.update(
      {
        image: imageUp3
      },
      { where: { id: extraImage1[2].dataValues.id, productId: id } }
    );

    res.status(200).json({
      message: "Success update",
      updatePropro,
      updateextra,
      updateextra2,
      updateextra3
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteProducts = async (req, res, next) => {
  let t;
  try {
    t = await sequelize.transaction();
    const product = await Product.findOne({ where: { id: req.params.id } });
    if (!product) {
      throw new AppError("product was not found", 400);
    }
    if (req.user.id !== product.sellerId) {
      throw new AppError("no permission to delete", 403);
    }

    await Extraimage.destroy({
      where: { productId: product.id },
      transaction: t
    });
    await product.destroy({ transaction: t });
    await t.commit();
    res.status(200).json({ message: "success delete" });
  } catch (err) {
    await t.rollback();
    console.log(err);
  }
};
