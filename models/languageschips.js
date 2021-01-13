'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LanguagesChips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Chips, {foreignKey: "id_chip", as: "chips"})
    }
  };
  LanguagesChips.init({
    id_chip: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LanguagesChips',
  });
  return LanguagesChips;
};