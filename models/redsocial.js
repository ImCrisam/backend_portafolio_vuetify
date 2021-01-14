'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RedSocial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RedSocial.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    link: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RedSocial',
  });
  return RedSocial;
};