const userService = require("../services/userService");

exports.getSellerById = async (req, res, next) => {
  try {
    const { sellerId } = req.params;

    const seller = await userService.getSellerById(sellerId);

    res.status(200).json({ seller });
  } catch (err) {
    next(err);
  }
};
