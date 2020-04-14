'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemsOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ItemId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Items', key: 'id'},
        type: Sequelize.INTEGER
      },
      OrderId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Orders', key: 'id'},
        type: Sequelize.INTEGER
      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('ItemsOrders');
  }
};