'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RedSocials', [
      {
      name: "Github",
      icon: "github",
      link: "https://github.com/imcrisam",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: "Linkedin",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/imcrisam/",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: "Twitter",
      icon: "twitter",
      link: "https://twitter.com/imcrisam",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: "Correo",
      icon: "email",
      link: "mailto:imcrisam@gmail.com",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('RedSocials', null, {});
    
  }
};
