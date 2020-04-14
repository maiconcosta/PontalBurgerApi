'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locale: {
        type: Sequelize.STRING
      },
      observation: {
        type: Sequelize.STRING
      },
      total: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      statusId: {
        allowNull: false,
        references: { model: 'Status', key: 'id'},
        type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};