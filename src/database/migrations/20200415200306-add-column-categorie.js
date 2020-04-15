'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Items',
      'categorieId', {
        allowNull: false,
        references: { model: 'Categories', key: 'id'},
        type: Sequelize.INTEGER
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Items',
      'categorieId'
    )    
  }
};
