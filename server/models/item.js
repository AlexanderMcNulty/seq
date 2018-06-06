'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Item.associate = function(models) {
    Item.belongsTo(models.ItemSet, {
      foreignKey: 'itemSetId',
      onDelete: 'CASCADE',
    });
  };

  return Item;
};
