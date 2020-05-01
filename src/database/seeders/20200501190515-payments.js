'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        id: 1,
        name: 'Dinheiro'
      },
      {
        id: 2,
        name: 'Cartão'
      },
      {
        id: 3,
        name: 'Picpay',  
      },
      {
        id: 4,
        name: 'iFood',  
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payments', null, {});
  }
};
