const { Category } = require('../models');
const AppError = require('../utils/appError');

exports.getAllcategory = async (req, res, next) => {
  try {
    const allCategory = await Category.findAll();
    res.status(200).json({ allCategory });
  } catch (err) {
    next(err);
  }
};
