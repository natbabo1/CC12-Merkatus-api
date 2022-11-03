const { User, Category, Product } = require("../models");
const { USER } = require("../config/constants");

const getUserById = async (id) => {
  return User.findOne({
    attributes: { exclude: ["password"] },
    where: { id }
  });
};
exports.getUserById = getUserById;

exports.getSellerById = async (id) => {
  return User.findOne({
    attributes: { exclude: ["password"] },
    where: { id, role: USER },
    include: { model: Product, as: "Seller", include: Category }
  });
};

exports.incomeExternalTransfer = async (id, amount) => {
  const user = await getUserById(id);
  await user.update({ wallet: user.wallet + amount });
};

exports.expenseExternalTransfer = async (id, amount) => {
  const user = await getUserById(id);
  await user.update({ wallet: user.wallet - amount });
};

exports.internalTransfer = async (senderId, receiverId, amount) => {
  const sender = await getUserById(senderId);
  const receiver = await getUserById(receiverId);
  await sender.update({ wallet: sender.wallet - amount });
  await receiver.update({ wallet: receiver.wallet + amount });
};
