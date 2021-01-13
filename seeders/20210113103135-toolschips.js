'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ToolsChips', [{
        id_chip: "1",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "2",

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ToolsChips', null, {});
  }
};
