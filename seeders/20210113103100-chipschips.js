'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ChipsChips', [
      {
        id_proyecto: 1,
        id_chip: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 1,
        id_chip: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 2,
        id_chip: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 2,
        id_chip: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 3,
        id_chip: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 3,
        id_chip: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 4,
        id_chip: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_proyecto: 4,
        id_chip: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ChipsChips', null, {});
  }
};