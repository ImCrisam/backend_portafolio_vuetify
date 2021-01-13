'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ChipsChips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_chip: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Chips',
          key: 'id'
        }
      },
      id_proyecto: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Proyecto',
          key: 'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ChipsChips');
  }
};