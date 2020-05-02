'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Orders',
      'internalCode', {
        type: Sequelize.INTEGER(4).ZEROFILL
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Orders',
      'internalCode'
    )    
  }
};
