'use strict'
module.exports = (sequelize, DataTypes) => {
  const ItemsOrders = sequelize.define('ItemsOrders', {
    count: DataTypes.INTEGER
  }, { freezeTableName: true })

  return ItemsOrders
}
