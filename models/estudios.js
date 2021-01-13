'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Estudios.init({
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    id_certificate: DataTypes.STRING,
    duration: DataTypes.STRING,
    image: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estudios',
  });
  return Estudios;
};