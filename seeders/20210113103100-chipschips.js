'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ChipsChips', [
      {
        id_chip: 1,
        id_proyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: 2,
        id_proyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: 3,
        id_proyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: 4,
        id_proyecto: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: 1,
        id_proyecto: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ChipsChips', null, {});
  }
};