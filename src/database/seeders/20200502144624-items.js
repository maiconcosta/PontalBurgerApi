'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Items', [
      {        
        name: 'Clássico Burger',
        value: 9,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, cebola roxa, alface e tomate.',
        salesId: 1
      },
      {        
        name: 'Cheese Clássico Burger',
        value: 10,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, queijo derretido, cebola roxa, barbecue, alface e tomate.',
        salesId: 2
      },
      {        
        name: 'Egg Clássico Burger',
        value: 10,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, ovo frito, cebola roxa, barbecue, alface e tomate.',
        salesId: 3
      },
      {        
        name: 'Cheese Egg Burger',
        value: 11,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, queijo derretido, ovo frito, cebola roxa, barbecue, alface e tomate.',
        salesId: 4
      },
      {        
        name: 'Bacon Burger',
        value: 11,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, bacon crocante, cebola roxa, barbecue, alface e tomate.',
        salesId: 5
      },
      {        
        name: 'Cheese Bacon Burger',
        value: 12,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, queijo derretido, bacon crocante, cebola roxa, barbecue, alface e tomate.',
        salesId: 6
      },
      {        
        name: 'Cheese Egg Bacon Burger',
        value: 13,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, queijo derretido, bacon crocante, ovo frito, cebola roxa, barbecue, alface e tomate.',
        salesId: 7
      },
      {        
        name: 'Supremo Burger',
        value: 15,
        categorieId: 1,
        description: 'Pão tostado na manteiga, carne artesanal, queijo derretido, bacon crocante, ovo frito, calabresa acebolada, banana frita, cebola roxa, barbecue, alface e tomate.',
        salesId: 8
      },
      {        
        name: 'Double Supremo Burger',
        value: 19,
        categorieId: 1,
        description: 'Pão tostado na manteiga, dobro de carne artesanal, dobro de queijo derretido, bacon crocante, ovo frito, calabresa acebolada, banana frita, cebola roxa, barbecue, alface e tomate.',
        salesId: 9
      },
      {        
        name: 'Coca Cola Lata',
        value: 5,
        categorieId: 4,
        description: 'Lata 350 ML',      
      },
      {        
        name: 'Guaraná Antártica Lata',
        value: 4,
        categorieId: 4,
        description: 'Lata 350 ML',      
      },
      {        
        name: 'Coca Cola 600',
        value: 7.50,
        categorieId: 4,
        description: 'Garrafa 600 ML',      
      },
      {        
        name: 'Guaraná Antártica 600',
        value: 6.50,
        categorieId: 4,
        description: 'Garrafa 600 ML',      
      },
      {        
        name: 'Açaí 300 ML',
        value: 9,
        categorieId: 2,
        description: 'Fruta: Banana. Complementos: Amendoim, Paçoca, M&Ms, Leite em Pó, Granola. - Cobertura: Leite Condensado e Cobertura de Chocolate',      
      },
      {        
        name: 'Açaí 500 ML',
        value: 12,
        categorieId: 2,
        description: 'Fruta: Banana. Complementos: Amendoim, Paçoca, M&Ms, Leite em Pó, Granola. - Cobertura: Leite Condensado e Cobertura de Chocolate',      
      },
      {        
        name: 'Combo Supremo Burger + Guaraná Antática Lata',
        value: 17,
        categorieId: 5,
        description: '1 Supremo Burger + 1 Guaraná Antártica lata',      
      } 
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
