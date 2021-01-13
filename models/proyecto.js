'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Proyecto.init({
    title: DataTypes.STRING,
    categoty: DataTypes.STRING,
    description: DataTypes.STRING,
    imagen: DataTypes.STRING,
    link: DataTypes.STRING,
    year: DataTypes.STRING,
    chips_code: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  return Proyecto;
};