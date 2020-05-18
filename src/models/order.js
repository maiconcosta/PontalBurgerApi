'use strict'
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    locale: DataTypes.STRING,
    observation: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    internalCode: DataTypes.INTEGER(4).ZEROFILL,
    deadline: DataTypes.INTEGER(2)
  }, {})
  Order.associate = function (models) {
    // eslint-disable-next-line no-unused-expressions
    Order.belongsToMany(models.Item, {
      through: 'ItemsOrders',
      as: 'items',
      foreignKey: 'OrderId'
    })

    Order.belongsTo(models.Status, {
      foreignKey: 'statusId'
    })

    Order.belongsTo(models.Payment, {
      foreignKey: 'paymentId'
    })
  }

  return Order
}
