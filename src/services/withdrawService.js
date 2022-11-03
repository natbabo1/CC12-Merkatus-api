const { Op } = require("sequelize");
const { WithdrawalRequest, User } = require("../models");
const cloudinary = require("../utils/cloudinary");
const {
  PENDING,
  ACCEPTED,
  COMPLETED,
  REJECTED
} = require("../config/constants");
const AppError = require("../utils/appError");

exports.createRequest = async (requesterId, amount, payOffId) =>
  WithdrawalRequest.create({
    status: PENDING,
    amount,
    requesterId,
    payOffId
  });

exports.getPendingOrAcceptedRequest = async (requesterId) =>
  WithdrawalRequest.findOne({
    where: { requesterId, status: { [Op.or]: [PENDING, ACCEPTED] } }
  });

exports.getRequests = async (requesterId) =>
  WithdrawalRequest.findAll({
    where: { requesterId }
  });

exports.getAllPendingOrAcceptedRequest = async () =>
  WithdrawalRequest.findAll({
    where: {
      status: {
        [Op.or]: [PENDING, ACCEPTED]
      }
    },
    include: {
      model: User,
      as: "requester",
      attributes: { exclude: ["password"] }
    }
  });

exports.getAllRequests = async () =>
  WithdrawalRequest.findAll({
    include: {
      model: User,
      as: "requester",
      attributes: { exclude: ["password"] }
    }
  });

exports.acceptRequest = async (requestId, status) => {
  if (status !== ACCEPTED) {
    throw new AppError("status is invalid", 400);
  }

  const request = await WithdrawalRequest.findOne({
    where: { id: requestId },
    include: {
      model: User,
      as: "requester",
      attributes: { exclude: ["password"] }
    }
  });

  if (!request) {
    throw new AppError("request does not exist", 400);
  }

  await request.update({ status });

  return request;
};

exports.completeRequest = async (requestId, file) => {
  const proofImage = await cloudinary.upload(file.path);
  const request = await WithdrawalRequest.findOne({
    where: { id: requestId },
    include: {
      model: User,
      as: "requester",
      attributes: { exclude: ["password"] }
    }
  });

  if (!request) {
    throw new AppError("request does not exist", 400);
  }

  await request.update({ status: COMPLETED, proofImage });

  return request;
};

exports.rejectRequest = async (requestId, detail) => {
  const request = await WithdrawalRequest.findOne({
    where: { id: requestId },
    include: {
      model: User,
      as: "requester",
      attributes: { exclude: ["password"] }
    }
  });

  if (!request) {
    throw new AppError("request does not exist", 400);
  }

  await request.update({ status: REJECTED, detail });

  return request;
};
