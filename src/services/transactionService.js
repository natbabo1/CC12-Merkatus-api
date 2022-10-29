const { COMPLETED, PENDING } = require("../config/constants");
const { Transaction } = require("../models");

exports.createPayInTransaction = async (amount, buyerId) => {
  return Transaction.create({
    status: PENDING,
    amount,
    senderId: buyerId,
    receiverId: 1
  });
};

exports.payInTransaction = async (transactionId, amount, buyerId) => {
  return Transaction.create({
    status: COMPLETED,
    amount,
    transactionId,
    senderId: buyerId,
    receiverId: 1
  });
};
