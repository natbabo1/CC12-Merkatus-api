const {
  PENDING,
  COMPLETED,
  ACCEPTED,
  REJECTED
} = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      status: DataTypes.ENUM(PENDING, ACCEPTED, REJECTED, COMPLETED),
      amount: DataTypes.DOUBLE.UNSIGNED,
      transactionId: DataTypes.STRING
    },
    { underscored: true }
  );

  Transaction.associate = (db) => {
    Transaction.belongsTo(db.User, {
      as: "Sender",
      foreignKey: {
        name: "senderId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Transaction.belongsTo(db.User, {
      as: "Receiver",
      foreignKey: {
        name: "receiverId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });

    Transaction.hasMany(db.Order, {
      as: "PayIn",
      foreignKey: {
        name: "payInId",
        allowNull: false
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });
    Transaction.hasOne(db.Order, {
      as: "PayOff",
      foreignKey: {
        name: "payOffId"
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT"
    });
  };

  return Transaction;
};
