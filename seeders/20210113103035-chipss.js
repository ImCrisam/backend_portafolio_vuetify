'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Chips', [{
        nombre: "CSharp",
        icon: "C#",
        nivel: 1,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "C",
        icon: "c",
        nivel: 0,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "C++",
        icon: "c++",
        nivel: 1,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "Java",
        icon: "java",
        nivel: 2,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "Python3",
        icon: "py",
        nivel: 1,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: " JavaScript",
        icon: "js",
        nivel: 0,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "PHP",
        icon: "php",
        nivel: 0,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "SQL",
        icon: "sql",
        nivel: 0,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "HTML/CSS",
        icon: "hc",
        nivel: 0,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chips', null, {});
  }
};