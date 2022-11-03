const fs = require("fs");
const transactionService = require("../services/transactionService");
const withdrawService = require("../services/withdrawService");
const { PENDING, COMPLETED, REJECTED } = require("../config/constants");
const AppError = require("../utils/appError");

exports.createWithdrawalRequest = async (req, res, next) => {
  try {
    const { id, wallet } = req.user;
    const { status, amount } = req.body;

    const pendingOrAcceptedRequest =
      await withdrawService.getPendingOrAcceptedRequest(id);

    if (pendingOrAcceptedRequest) {
      throw new AppError("pending or accepted request is exist", 400);
    }

    if (!amount || isNaN(amount)) {
      throw new AppError("amount is not provide or not a number");
    }
    if (amount > wallet) {
      throw new AppError(
        "withdraw amount must not exceed money in your wallet"
      );
    }
    if (amount < 1000) {
      throw new AppError("withdraw amount must be more than 1000 baht", 400);
    }

    if (status !== PENDING) {
      throw new AppError("status is invalid", 400);
    }
    const transaction = await transactionService.createWithdrawTransaction(
      +amount,
      id
    );
    const request = await withdrawService.createRequest(
      id,
      +amount,
      transaction.id
    );

    return res.status(200).json({ status: "newRequest", request });
  } catch (err) {
    next(err);
  }
};

exports.getRequests = async (req, res, next) => {
  try {
    const { id } = req.user;

    const requests = await withdrawService.getRequests(id);

    return res.status(200).json({ requests });
  } catch (err) {
    next(err);
  }
};

exports.getAllRequests = async (req, res, next) => {
  try {
    const requests = await withdrawService.getAllRequests();
    return res.status(200).json({ requests });
  } catch (err) {
    next(err);
  }
};

exports.acceptRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;

    const request = await withdrawService.acceptRequest(requestId, status);

    return res.status(200).json({ request });
  } catch (err) {
    next(err);
  }
};

exports.completeRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;

    if (!req.file) {
      throw new AppError("image of withdraw proof must be provided", 400);
    }
    if (status !== COMPLETED) {
      throw new AppError("status is invalid", 400);
    }

    const request = await withdrawService.completeRequest(requestId, req.file);

    await transactionService.completeWithdrawTransaction(request.payOffId);

    return res.status(200).json({ request });
  } catch (err) {
    next(err);
  } finally {
    fs.unlinkSync(req.file.path);
  }
};

exports.rejectRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { status, detail } = req.body;

    console.log(status + "=============================" + detail);
    if (status !== REJECTED) {
      throw new AppError("status is invalid", 400);
    }

    const request = await withdrawService.rejectRequest(requestId, detail);

    await transactionService.rejectWithdrawTransaction(request.payOffId);

    return res.status(200).json({ request });
  } catch (err) {
    next(err);
  }
};
