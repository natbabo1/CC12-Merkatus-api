const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const { User } = require('../models');
const { USERS } = require('../config/constants');

const genToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY || 'private_key', {
    expiresIn: process.env.JWT_EXPIRES || '1d',
  });

exports.register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
      confirmPassword,
      wallet,
    } = req.body;

    if (!email) {
      throw new AppError('email is required', 400);
    }
    if (!password) {
      throw new AppError('password is required', 400);
    }
    if (password !== confirmPassword) {
      throw new AppError('password and confirm password did not match', 400);
    }
    const isEmail = validator.isEmail(email + '');
    const isMobile = validator.isMobilePhone(phoneNumber + '');

    if (!isEmail) {
      throw new AppError('email address is invalid format', 400);
    }

    if (!isMobile) {
      throw new AppError('Mobile is invalid format', 400);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email: isEmail && email,
      phoneNumber: isMobile && phoneNumber,
      address,
      password: hashedPassword,
      role: USERS,
      wallet,
    });

    const token = genToken({ id: user.id });
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new AppError('email or password is invalid', 400);
    }

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new AppError('email or password is invalid', 400);
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw new AppError('email or password is invalid', 400);
    }

    const token = genToken({ id: user.id });
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};