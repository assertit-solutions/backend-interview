const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://assert:assert@localhost:5432/assert"
);
module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection with database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
