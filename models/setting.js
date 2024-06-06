"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setting.init(
    {
      name: DataTypes.STRING,
      dataType: {
        type: DataTypes.ENUM,
        values: ["string", "number", "boolean"],
        allowNull: false,
      },
      source_type: {
        type: DataTypes.ENUM,
        values: ["user", "account"],
        defaultValue: "user",
        allowNull: false,
      },
      source_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Setting",
      tableName: "settings",
    }
  );
  return Setting;
};
