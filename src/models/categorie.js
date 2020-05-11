'use strict'
module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING
  }, {})
  Categorie.associate = function (models) {
    // associations can be defined here
  }
  return Categorie
}
