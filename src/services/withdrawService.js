const { Op } = require("sequelize");
const { WithdrawalRequest } = require("../models");
const { PENDING, ACCEPTED } = require("../config/constants");

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
