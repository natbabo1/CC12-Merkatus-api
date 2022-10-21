const productService = require("../services/productService");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req.query);
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};
