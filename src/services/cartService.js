const { Op } = require("sequelize");
const { Mycart, Product, User } = require("../models");

const getCartById = async (id) => {
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
exports.getCartById = getCartById;

exports.calTotalAmountFromCartItems = async (cartIds, buyercartId) => {
  const cartItems = await Mycart.findAll({
    where: {
      buyercartId,
      id: {
        [Op.or]: cartIds
      }
    },
    include: Product
  });

  return {
    verifiedCheckoutItems: cartItems,
    totalFromCheckout: cartItems.reduce(
      (acc, item) => acc + item.count * item.Product.unitPrice,
      0
    )
  };
};

exports.deleteCartAfterCheckout = async (id, transaction) => {
  await Mycart.destroy(
    {
      where: {
        id
      }
    },
    { transaction }
  );
};
