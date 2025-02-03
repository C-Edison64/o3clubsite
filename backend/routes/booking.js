// backend/routes/booking.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/booking"); // Import the Booking model

router.post("/", async (req, res) => {
  console.log("Received a booking request with body:", req.body); // Log incoming request body
  try {
    const { name, email, date, time } = req.body;
    // Ensure required fields are present (optional basic check)
    if (!name || !email || !date || !time) {
      console.error("Missing required booking data");
      return res.status(400).json({ error: "Missing required booking data" });
    }

    // Create a new booking using the Sequelize model
    const newBooking = await Booking.create({ name, email, date, time });
    console.log("Booking created:", newBooking);
    res.status(201).json({ message: "Booking received", booking: newBooking });
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
