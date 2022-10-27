const { Op } = require("sequelize");
const { Category, Product, User, Extraimage } = require("../models");

exports.getProducts = async ({
  categoryId,
  limit,
  page,
  sellerId,
  productName,
  minPrice,
  maxPrice,
  emptyStock,
  orderBy,
  order,
}) => {
  const where = {};

  if (categoryId) {
    where.categoryId = categoryId;
  }
  if (sellerId) {
    where.sellerId = sellerId;
  }
  if (productName) {
    where.productName = { [Op.substring]: productName };
  }
  if (minPrice) {
    where.unitPrice = { [Op.gte]: +minPrice };
  }
  if (maxPrice) {
    if (where.unitPrice) {
      where.unitPrice[Op.lte] = +maxPrice;
    } else {
      where.unitPrice = { [Op.lte]: +maxPrice };
    }
  }
  if (emptyStock === "true") {
    where.stock = { [Op.gte]: 0 };
  } else {
    where.stock = { [Op.gte]: 1 };
  }

  return Product.findAll({
    where,
    include: Category,
    limit: limit ? +limit : 30,
    offset: page ? (page - 1) * limit : 0,
    order: [
      orderBy
        ? [orderBy, order?.toLowerCase() === "asc" ? "ASC" : "DESC"]
        : ["updatedAt", order ?? "DESC"],
    ],
  });
};

exports.getProductById = async (id) => {
  return Product.findOne({
    where: { id },
    include: [
      { model: User, as: "Seller", attributes: { exclude: "password" } },
      { model: Extraimage },
    ],
  });
};

exports.getExtraImage = async (id) => {
  return Extraimage.findAll({
    where: { productId: id },
  });
};
