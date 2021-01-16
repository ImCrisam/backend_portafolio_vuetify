'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('LanguagesChips', [{
        id_chip: "1",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "2",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "3",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "4",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "5",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "6",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "7",

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_chip: "8",

        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LanguagesChips', null, {});
  }
};