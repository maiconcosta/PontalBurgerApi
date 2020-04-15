'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Status',
      'createdAt', {
        allowNull: false,
        type: Sequelize.DATE
      }      
    ),
    queryInterface.addColumn(
      'Status',
      'updatedAt', {
        allowNull: false,
        type: Sequelize.DATE
      }      
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Status',
      'createdAt'
    ),
    queryInterface.removeColumn(
      'Status',
      'updatedAt'
    )
  }
};
