// backend/index.js
const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./db");
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

// Connect to the database and synchronize models before starting the server
connectDB().then(() => {
  sequelize.sync({ alter: true }).then(() => {
    console.log("Database synchronized.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
});
