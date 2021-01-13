'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Chips', [{
        nombre: "CSharp",
        icon: "C#",
        nivel: 0,
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
        nivel: 0,
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Java",
        icon: "java",
        nivel: 2,
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