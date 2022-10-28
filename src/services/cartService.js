const { Mycart, Product, User } = require("../models");

exports.getCartById = async (id) => {
  return Mycart.findOne({
    where: {
      id
    },
    include: {
      model: Product,
      include: {
        model: User,
        as: "Seller",
        attributes: { exclude: "password" }
      }
    }
  });
};
