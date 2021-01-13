'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Perfils', [{
      user: 'imcrisam',
      firstName: "Cristian Mauricio",
      lastName: "Arias Mayorga",
      date: "1994,12,20",
      description: "aaaaaaaaaa",
      country: "Colombia",
      city: "Bucaramanga",
      title: "Programador junior",
      imagen: "aaaaaaaa",
      languages_code: " ",
      tools_code: " ",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('Perfils', null, {});
    
  }
};
