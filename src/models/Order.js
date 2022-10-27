const {
  PAID,
  TRANSFER,
  RECEIVED,
  ARRIVED,
  RATED
} = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      status: DataTypes.ENUM(PAID, TRANSFER, ARRIVED, RECEIVED, RATED),
      date: DataTypes.STRING,
      amount: DataTypes.INTEGER.UNSIGNED,
      totalPrice: DataTypes.FLOAT.UNSIGNED,
      rating: DataTypes.INTEGER,
      trackingNo: DataTypes.STRING
    },
    { underscored: true }
  );

  Order.associate = (db) => {
    Order.belongsTo(db.User, {
      as: "Buyer",
      foreignKey: {
        name: "buyerId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Order.belongsTo(db.Product, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Order.belongsTo(db.Transaction, {
      as: "PayIn",
      foreignKey: {
        name: "payInId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Order.belongsTo(db.Transaction, {
      as: "PayOff",
      foreignKey: {
        name: "payOffId"
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });
  };

  return Order;
};
