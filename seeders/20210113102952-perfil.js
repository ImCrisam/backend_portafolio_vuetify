'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Perfils', [{
      user: 'imcrisam',
      firstName: "Cristian Mauricio",
      lastName: "Arias Mayorga",
      date: "1994,12,20",
      description: "Seducido por la complejidad pero amante de las soluciones simples",
      country: "Colombia",
      city: "Bucaramanga",
      title: "Programador junior",
      imagen: "/photo.jpg",
      imagen2: "/photo2.jpg",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('Perfils', null, {});
    
  }
};
