const { Mycart, Product, User } = require("../models");
const cartService = require("../services/cartService");

exports.createCartItem = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { productId } = req.body;
    const newCart = await Mycart.create({ buyercartId: id, productId });
    const cart = await cartService.getCartById(newCart.id);
    res.status(200).json({ cart });
  } catch (err) {
    next(err);
  }
};

exports.getMyCart = async (req, res, next) => {
  try {
    const { id } = req.user;
    const myCart = await Mycart.findAll({
      where: { buyercartId: id },
      include: [
        {
          model: Product,
          include: [
            { model: User, as: "Seller", attributes: { exclude: "password" } }
          ]
        }
      ]
    });
    res.status(200).json({ carts: myCart });
  } catch (err) {
    next(err);
  }
};

exports.putMyCart = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { cartId, count } = req.body;
    const updateCart = await Mycart.update(
      { count },
      { where: { id: cartId, buyercartId: id } }
    );
    res.status(200).json({ message: "update success" });
  } catch (err) {
    next(err);
  }
};

exports.deleteCartItem = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { cartId } = req.body;
    console.log(req.body);
    const deleteCartItem = await Mycart.destroy({
      where: { id: cartId, buyercartId: id }
    });
    res.status(200).json({ message: "delete success" });
  } catch (err) {
    next(err);
  }
};
