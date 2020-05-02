'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    locale: DataTypes.STRING,
    observation: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    internalCode: DataTypes.INTEGER(4).ZEROFILL
  }, {});
  Order.associate = function(models) {
    Order.belongsToMany(models.Item, {
      through: 'ItemsOrders',
      as: 'items',
      foreignKey: 'OrderId'
    }),

    Order.belongsTo(models.Status, {
      foreignKey: 'statusId'
    }),

    Order.belongsTo(models.Payment, {
      foreignKey: 'paymentId'
    })
  };
  
  return Order;
};