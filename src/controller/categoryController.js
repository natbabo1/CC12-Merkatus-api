const { Category } = require('../models');
const AppError = require('../utils/appError');

exports.getAllcourse = async (req, res, next) => {
  try {
    const allCategory = await Category.findAll();
    res.status(200).json({ allCategory });
  } catch (err) {
    next(err);
  }
};
