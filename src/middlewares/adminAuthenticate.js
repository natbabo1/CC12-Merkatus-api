const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const { User } = require("../models");
const { ADMIN } = require("../config/constants");

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer")) {
      throw new AppError("unauthenticate1", 401);
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      throw new AppError("unauthenticated2", 401);
    }
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "private_key"
    );

    const user = await User.findOne({
      where: { id: payload.id },
      attributes: { exclude: "password" } // เพื่อจะได้ไม่ส่ง password ออกมาา
    });
    if (!user || user.role !== ADMIN) {
      throw new AppError("unauthenticated3", 401);
    }
    req.admin = user;
    next();
  } catch (err) {
    next(err);
  }
};
