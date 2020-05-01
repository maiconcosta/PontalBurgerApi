'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'ItemsOrders',
      'count', {     
        type: Sequelize.INTEGER
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'ItemsOrders',
      'count'
    )    
  }
};
