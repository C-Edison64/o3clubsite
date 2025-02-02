// backend/routes/booking.js
const express = require("express");
const router = express.Router();

// Example: POST /api/booking
router.post("/", async (req, res) => {
  try {
    const { name, email, date, time } = req.body;
    // Here, add your logic to save the booking to a database (or simply log it)
    console.log("Received booking:", { name, email, date, time });

    // For now, send a simple response:
    res.status(201).json({
      message: "Booking received",
      booking: { name, email, date, time },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
