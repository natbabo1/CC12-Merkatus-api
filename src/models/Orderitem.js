module.exports = (sequelize, DataTypes) => {
  const Orderitem = sequelize.define(
    'Orderitem',
    {
      amount: DataTypes.INTEGER.UNSIGNED,
      totalPrice: DataTypes.FLOAT.UNSIGNED,
      rating: DataTypes.INTEGER,
    },
    { underscored: true }
  );

  Orderitem.associate = (db) => {
    Orderitem.belongsTo(db.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Orderitem.belongsTo(db.Order, {
      foreignKey: {
        name: 'orderId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Orderitem;
};
