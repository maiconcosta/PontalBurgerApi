'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    locale: DataTypes.STRING,
    observation: DataTypes.STRING,
    total: DataTypes.DECIMAL
  }, {});
  Order.associate = function(models) {
    Order.belongsToMany(models.Item, {
      through: 'ItemsOrders',
      as: 'items',
      foreignKey: 'OrderId'
    }),

    Order.belongsTo(models.Status, {
      foreignKey: 'statusId'
    })
  };
  
  return Order;
};