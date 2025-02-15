// backend/models/booking.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

// Define the Booking model with the required fields
const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "bookings",
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

module.exports = Booking;
