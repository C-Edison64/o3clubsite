// backend/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5000,
    dialect: "postgres",
    logging: false, // Set to true if you want SQL logs for debugging
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
