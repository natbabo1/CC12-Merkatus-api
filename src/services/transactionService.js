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

exports.completePayInTransaction = async (payInId, transactionId) => {
  return Transaction.update(
    {
      status: COMPLETED,
      transactionId
    },
    { where: { id: payInId } }
  );
};
