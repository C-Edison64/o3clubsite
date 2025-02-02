// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import booking route
const bookingRoute = require("./routes/booking");
app.use("/api/booking", bookingRoute);

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
