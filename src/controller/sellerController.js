const userService = require("../services/userService");
const orderService = require("../services/orderService");

exports.getSellerRating = async (req, res, next) => {
  try {
    const { sellerId } = req.params;
    const avgRating = await orderService.getSellerRating(sellerId);
    res.status(200).json({ avgRating });
  } catch (err) {
    next(err);
  }
};

exports.getSellerById = async (req, res, next) => {
  try {
    const { sellerId } = req.params;

    const seller = await userService.getSellerById(sellerId);
    const avgRating = await orderService.getSellerRating(sellerId);

    res.status(200).json({ seller, avgRating });
  } catch (err) {
    next(err);
  }
};
