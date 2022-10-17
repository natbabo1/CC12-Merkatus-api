module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productDetail: DataTypes.STRING,
      unitPrice: DataTypes.INTEGER.UNSIGNED,
      image: DataTypes.STRING,
      stock: DataTypes.INTEGER.UNSIGNED,
    },
    { underscored: true }
  );

  Product.associate = (db) => {
    Product.belongsTo(db.Category, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Product.hasMany(db.Order, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Product.belongsTo(db.User, {
      as: 'Seller',
      foreignKey: {
        name: 'sellerId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Product;
};
