'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Estudios', [{
        type: "Tecnico",
        title: "Programacion de Software",
        company: "Servicio Nacional de Aprendizaje SENA",
        date: new Date("2020,05,01"),
        id_certificate: "xxxxxxxxx",
        duration: "xxxxx",
        image: "xxxxxxxx",
        category: "xx",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "aaaaaa",
        title: "Paaarogramacion de Software",
        company: "Servaaaicio Nacional de Aprendizaje SENA",
        date: new Date("2020,01,01"),
        id_certificate: "xxxxxxxxx",
        duration: "xxxxx",
        image: "xxxxxxxx",
        category: "xx",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: "xxxxxxxxx",
        title: "Programxe Software",
        company: "Serxe Aprendizaje SENA",
        date: new Date("2020,03,01"),
        id_certificate: "xxxxxxxxx",
        duration: "xxxxx",
        image: "xxxxxxxx",
        category: "xx",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estudios', null, {});
  }
};