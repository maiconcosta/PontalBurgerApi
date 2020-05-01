'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Orders',
      'paymentId', {      
        references: { model: 'Payments', key: 'id'},
        type: Sequelize.INTEGER
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Orders',
      'paymentId'
    )    
  }
};
