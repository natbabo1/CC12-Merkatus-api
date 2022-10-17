module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction',
    { status: DataTypes.ENUM(PENDING, COMPLETED) },
    { underscored: true }
  );

  Transaction.associate = (db) => {
    Transaction.belongsTo(db.User, {
      as: 'Sender',
      foreignKey: {
        name: 'senderId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Transaction.belongsTo(db.User, {
      as: 'Receiver',
      foreignKey: {
        name: 'receiverId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Transaction.belongsTo(db.Order, {
      foreignKey: {
        name: 'orderId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Transaction;
};
