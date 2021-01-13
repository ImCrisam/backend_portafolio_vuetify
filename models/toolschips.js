'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToolsChips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Chips, {foreignKey: "id_chip", as: "chips"})
    }
  };
  ToolsChips.init({
    id_chip: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ToolsChips',
  });
  return ToolsChips;
};