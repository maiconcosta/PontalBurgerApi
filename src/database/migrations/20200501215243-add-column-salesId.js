'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Items',
      'salesId', {
        type: Sequelize.INTEGER(2).ZEROFILL
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Items',
      'salesId'
    )    
  }
};
