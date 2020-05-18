'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Orders',
      'deadline', {
        type: Sequelize.INTEGER(2)
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Orders',
      'deadline'
    )
  }
}
