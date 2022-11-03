const { COMPLETED, PENDING, REJECTED } = require("../config/constants");
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

exports.createInternalTransaction = async (
  senderId,
  receiverId,
  amount,
  transaction
) => {
  return Transaction.create({
    status: COMPLETED,
    amount,
    senderId,
    receiverId
  });
};

exports.createWithdrawTransaction = async (amount, requesterId) =>
  Transaction.create({
    status: PENDING,
    amount,
    senderId: 1,
    receiverId: requesterId
  });

exports.completeWithdrawTransaction = async (transactionId) =>
  await Transaction.update(
    { status: COMPLETED },
    { where: { id: transactionId } }
  );

exports.rejectWithdrawTransaction = async (transactionId) =>
  await Transaction.update(
    { status: REJECTED },
    { where: { id: transactionId } }
  );
