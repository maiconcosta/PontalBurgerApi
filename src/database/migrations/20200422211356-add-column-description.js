'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Items',
      'description', {
        allowNull: false,        
        type: Sequelize.STRING
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Items',
      'description'
    )    
  }
};
