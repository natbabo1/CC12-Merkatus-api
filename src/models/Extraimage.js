module.exports = (sequelize, DataTypes) => {
  const Extraimage = sequelize.define(
    'Extraimage',
    {
      image: DataTypes.STRING,
    },
    { underscored: true }
  );

  Extraimage.associate = (db) => {
    Extraimage.belongsTo(db.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Extraimage;
};
