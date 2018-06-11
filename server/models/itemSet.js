'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemSet = sequelize.define('ItemSet', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
  ItemSet.associate = function(models) {
    ItemSet.hasMany(models.Item, {
      foreignKey: 'itemId',
      as: 'items',
    });
  };

  return ItemSet;
};
