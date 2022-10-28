module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productDetail: DataTypes.STRING,
      unitPrice: { type: DataTypes.FLOAT.UNSIGNED, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      stock: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 0 }
    },
    { underscored: true }
  );

  Product.associate = (db) => {
    Product.belongsTo(db.Category, {
      foreignKey: {
        name: "categoryId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Product.belongsTo(db.User, {
      as: "Seller",
      foreignKey: {
        name: "sellerId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Product.hasMany(db.Order, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Product.hasMany(db.Mycart, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Product.hasMany(db.Extraimage, {
      foreignKey: {
        name: "productId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });
  };

  return Product;
};
