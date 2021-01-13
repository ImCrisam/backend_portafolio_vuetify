'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Proyectos', [
      {
      title: "Duis in aliqua amet laboris.",
      categoty: "lorem",
      description: "Nulla non ea ad ex et nulla deserunt id cupidatat eu.",
      imagen: "",
      link: "",
      year: "2020",
      chips_code: "",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        title: "xxxDuis in aliqua amet laboris.",
        categoty: "lorxxxem",
        description: "Nulxxxla non ea ad ex et nulla deserunt id cupidatat eu.",
        imagen: "",
        link: "",
        year: "2020",
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Proyectos', null, {});

  }
};