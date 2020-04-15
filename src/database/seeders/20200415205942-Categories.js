'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Burgers'
      },
      {
        id: 2,
        name: 'Açaí'
      },
      {
        id: 3,
        name: 'Fritas',  
      },
      {
        id: 4,
        name: 'Bebidas',  
      }   
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
