'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Proyectos', [
      {
      title: "SpaceMan",
      categoty: "VideoGame",
      description: "Primero proyecto realizado con Unity, basado en el Curso: “C# para Videojuegos” en platzi",
      imagen: "/proyecto/VideoGame01.jpg",
      link: "https://imcrisam.itch.io/spaceman-platzi",
      repo: "https://github.com/imcrisam/Platzi_CSharp_",
      date: new Date("2020,09,01"),
      chips_code: "",
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        title: "BreachBreaker",
        categoty: "VideoGame",
        description: "Proyecto con Unity, basado en el Curso: “Desarrollo de Videojuegos para Móviles con Unity” en Platzi",
        imagen: "/proyecto/VideoGame02.jpg",
        link: "https://imcrisam.itch.io/breachbreaker",
        repo: "https://github.com/imcrisam/Intro_Unity_Moviles",
        date: new Date("2021,01,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Protefolio_Frontend",
        categoty: "Frontend",
        description: "Proyecto con Vue2-cli y Vuetify para la creación de este portafolio",
        imagen: "",
        link: "/",
        repo: "https://github.com/imcrisam/portafolio_vuetify",
        date: new Date("2021,01,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Protefolio_Frontend",
        categoty: "Backend",
        description: "Backend (API) de este proyecto “portafolio” creada con express.js",
        imagen: "",
        link: "/",
        date: new Date("2021,01,01"),
        chips_code: "",
        estado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Proyectos', null, {});

  }
};