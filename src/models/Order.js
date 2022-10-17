const { PAID, TRANSFER, RECEIVED } = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      status: DataTypes.ENUM(PAID, TRANSFER, RECEIVED),
      rating: DataTypes.INTEGER,
      amount: DataTypes.INTEGER.UNSIGNED,
      totalPrice: DataTypes.INTEGER.UNSIGNED,
    },
    { underscored: true }
  );

  Order.associate = (db) => {
    Order.belongsTo(db.User, {
      as: 'Buyer',
      foreignKey: {
        name: 'buyerId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Order.belongsTo(db.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Order.hasOne(db.Transaction, {
      foreignKey: {
        name: 'orderId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Order;
};
