const { User, Category, Product } = require("../models");
const { USER } = require("../config/constants");

exports.getUserById = async (id) => {
  return User.findOne({
    attributes: { exclude: ["password"] },
    where: { id }
  });
};

exports.getSellerById = async (id) => {
  return User.findOne({
    attributes: { exclude: ["password"] },
    where: { id, role: USER },
    include: { model: Product, as: "Seller", include: Category }
  });
};

exports.incomeExternalTransfer = async (id, amount) => {
  const user = await User.findOne({ where: { id } });
  await user.update({ wallet: user.wallet + amount });
};
