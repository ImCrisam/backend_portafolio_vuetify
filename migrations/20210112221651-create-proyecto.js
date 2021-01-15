'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      categoty: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      repo: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      chips_code: {
        type: Sequelize.STRING
      },
      estado: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Proyectos');
  }
};