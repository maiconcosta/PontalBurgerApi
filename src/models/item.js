'use strict'
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    value: DataTypes.STRING,
    description: DataTypes.STRING,
    salesId: DataTypes.INTEGER(2).ZEROFILL
  }, {})
  Item.associate = function (models) {
    // eslint-disable-next-line no-unused-expressions
    Item.belongsToMany(models.Order, {
      through: 'ItemsOrders',
      as: 'Orders',
      foreignKey: 'ItemId'
    })

    Item.belongsTo(models.Categorie, {
      foreignKey: 'categorieId'
    })
  }

  return Item
}
