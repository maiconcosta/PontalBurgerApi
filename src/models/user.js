'use strict'
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = user.password && user.password !== '' ? bcrypt.hashSync(user.password, 10) : ''
      }
    }
  })
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
