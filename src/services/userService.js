const { User, Category, Product } = require("../models");
const { USER } = require("../config/constants");

exports.getUserById = async (id) => {
  return User.findOne({
    attributes: { exclude: ["password"] },
    where: { id }
  });
};

exports.getSellerById = async (id) => {
  return User.findOne({
    attributes: { exclude: ["password"] },
    where: { id, role: USER },
    include: { model: Product, as: "Seller", include: Category }
  });
};

// exports.getUser = async ({ firstName, lastName, email, phoneNumber, role }) => {
//   const where = { role: role ?? USER };

//   if (firstName) {
//     where.firstName = { [Op.substring]: firstName };
//   }
//   if (lastName) {
//     where.lastName = { [Op.substring]: lastName };
//   }
//   if (email) {
//     where.email = email;
//   }
//   if (phoneNumber) {
//     where.phoneNumber = phoneNumber;
//   }
//   if (role) {
//     where.role = role;
//   }
// };
