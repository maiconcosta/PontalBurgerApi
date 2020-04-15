'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingredients', [
      {
        id: 1,
        name: 'Pão',
        categorieId: 1
      },
      {
        id: 2,
        name: 'Carne Artesanal',
        categorieId: 1
      },
      {
        id: 3,
        name: 'Queijo Mussarela',
        categorieId: 1
      },
      {
        id: 4,
        name: 'Bacon',
        categorieId: 1
      },
      {
        id: 5,
        name: 'Ovo Frito',
        categorieId: 1
      },
      {
        id: 6,
        name: 'Banana Frita',
        categorieId: 1
      },
      {
        id: 7,
        name: 'Calabresa Acebolada',
        categorieId: 1
      },
      {
        id: 8,
        name: 'Cebola Roxa',
        categorieId: 1
      },
      {
        id: 9,
        name: 'Molho Barbecue',
        categorieId: 1
      },
      {
        id: 10,
        name: 'Alface',
        categorieId: 1
      },
      {
        id: 11,
        name: 'Tomate',
        categorieId: 1
      },
      {
        id: 12,
        name: 'Milho',
        categorieId: 1
      },
      {
        id: 13,
        name: 'Batata Palha',
        categorieId: 1
      },
      {
        id: 14,
        name: 'Banana',
        categorieId: 2
      },
      {
        id: 15,
        name: 'Leite em Pó',
        categorieId: 2
      },
      {
        id: 16,
        name: 'Paçoca',
        categorieId: 2
      },
      {
        id: 17,
        name: 'Granola',
        categorieId: 2
      },
      {
        id: 18,
        name: 'Gotas de Chocolate',
        categorieId: 2
      },
      {
        id: 19,
        name: 'Leite Condensado',
        categorieId: 2
      },
      {
        id: 20,
        name: 'Cobertura de Chocolate',
        categorieId: 2
      }      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
