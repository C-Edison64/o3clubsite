// backend/routes/booking.js
const express = require("express");
const router = express.Router();

// Temporarily return a test response to confirm the endpoint is hit
router.post("/", (req, res) => {
  console.log("Received POST /api/booking with body: ", req.body);
  res
    .status(201)
    .json({ message: "Booking received (test response)", data: req.body });
});

module.exports = router;
