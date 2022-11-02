const {
  COMPLETED,
  REJECTED,
  ACCEPTED,
  PENDING
} = require("../config/constants");

module.exports = (sequelize, Datatypes) => {
  const WithdrawalRequest = sequelize.define(
    "WithdrawalRequest",
    {
      amount: { type: Datatypes.INTEGER, allowNull: false },
      status: Datatypes.ENUM(PENDING, ACCEPTED, REJECTED, COMPLETED),
      detail: Datatypes.STRING,
      proofImage: Datatypes.STRING
    },
    { underscored: true }
  );

  WithdrawalRequest.associate = (db) => {
    WithdrawalRequest.belongsTo(db.User, {
      as: "requester",
      foreignKey: {
        name: "requesterId",
        allowNull: false
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT"
    });
    WithdrawalRequest.belongsTo(db.Transaction, {
      foreignKey: {
        name: "payOffId",
        allowNull: false
      }
    });
  };

  return WithdrawalRequest;
};
