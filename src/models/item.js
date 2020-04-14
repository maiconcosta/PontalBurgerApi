'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    Item.belongsToMany(models.Order, {
      through: 'ItemsOrders',
      as: 'Orders',
      foreignKey: 'ItemId'
    })
  };
  
  return Item;
};