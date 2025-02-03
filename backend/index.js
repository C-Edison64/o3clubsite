// backend/index.js
const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./db");
const Booking = require("./models/booking"); // Ensure this is imported to register the model
const bookingRoute = require("./routes/booking");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/booking", bookingRoute);

app.get("/", (req, res) => {
  res.send("API is running!");
});

// Connect to the database and sync models
connectDB().then(() => {
  sequelize.sync({ alter: true }).then(() => {
    console.log("Database synchronized.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
});
