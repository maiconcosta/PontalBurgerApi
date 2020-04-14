'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Status', [
      {
        id: 1,
        status: 'Iniciado'
      },
      {
        id: 2,
        status: 'Preparando'
      },
      {
        id: 3,
        status: 'Saiu para Entrega'
      },
      {
        id: 4,
        status: 'Concluído'
      },
      {
        id: 5,
        status: 'Cancelado'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Status', null, {});
  }
};
