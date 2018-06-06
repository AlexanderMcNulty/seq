'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemSet = sequelize.define('ItemSet', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
  ItemSet.associate = (models) => {
    ItemSet.hasMany(models.Item, {
      foreignKey: 'itemSetId',
      as: 'items',
    });
  };

  return ItemSet;
};
