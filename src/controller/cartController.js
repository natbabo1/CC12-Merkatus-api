const { Mycart } = require("../models");

exports.createCartItem = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { productId, count } = req.body;
    const newCart = await Mycart.create({ count, buyercartId: id, productId });
    res.status(200).json({ cart: newCart });
  } catch (err) {
    next(err);
  }
};

exports.getMyCart = async (req, res, next) => {
  try {
    const { id } = req.user;
    const myCart = await Mycart.findAll({ where: { buyercartId: id } });
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
    const { cartItem, cartId } = req.body;
    const deleteCartItem = await Mycart.destroy({
      where: { id: cartId, buyercartId: id },
    });
  } catch (err) {
    next(err);
  }
};
