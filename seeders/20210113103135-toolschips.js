'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ToolsChips', [{
        id_chip: "10",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "11",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "12",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "13",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "14",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "15",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "16",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "17",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "18",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "19",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "20",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "21",

        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ToolsChips', null, {});
  }
};
