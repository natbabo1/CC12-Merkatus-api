module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING()
    },
    { underscored: true }
  );

  return User;
};
