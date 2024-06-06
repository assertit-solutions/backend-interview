"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("settings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataType: {
        type: Sequelize.ENUM,
        values: ["string", "number", "boolean"],
        allowNull: false,
      },
      source_type: {
        type: Sequelize.ENUM,
        values: ["user", "account"],
        allowNull: false,
      },
      source_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Settings");
  },
};
