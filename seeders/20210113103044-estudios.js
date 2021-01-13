'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Estudios', [{
        type: "Tecnico",
        title: "Programacion de Software",
        company: "Servicio Nacional de Aprendizaje SENA",
        date: "05,2020",
        id_certificate: "xxxxxxxxx",
        duration: "xxxxx",
        image: "xxxxxxxx",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type: "aaaaaa",
        title: "Paaarogramacion de Software",
        company: "Servaaaicio Nacional de Aprendizaje SENA",
        date: "05,2aa020",
        id_certificate: "xxxxxxxxx",
        duration: "xxxxx",
        image: "xxxxxxxx",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type: "xxxxxxxxx",
        title: "Programxe Software",
        company: "Serxe Aprendizaje SENA",
        date: "05,x20",
        id_certificate: "xxxxxxxxx",
        duration: "xxxxx",
        image: "xxxxxxxx",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Estudios', null, {});
  }
};