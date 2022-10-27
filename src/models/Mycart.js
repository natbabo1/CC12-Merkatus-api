module.exports = (sequelize, DataTypes) => {
  const Mycart = sequelize.define(
    "Mycart",
    {
      count: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    { underscored: true }
  );

  Mycart.associate = (db) => {
    Mycart.belongsTo(db.User, {
      as: "Buyercart",
      foreignKey: {
        name: "buyercartId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });

    Mycart.belongsTo(db.Product, {
      foreignKey: {
        name: "productId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Mycart;
};
