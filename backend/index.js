// backend/index.js

require("dotenv").config();
process.on("unhandledRejection", (error) => {
  console.error("Unhandled rejection:", error);
});

const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./db"); // Database connection
const bookingRoute = require("./routes/booking");

const app = express();
// Use 3001 as the Express server port
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});
app.use("/api/booking", bookingRoute);

connectDB()
  .then(() => {
    sequelize
      .sync({ alter: true })
      .then(() => {
        console.log("Database synchronized.");
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      })
      .catch((syncError) => {
        console.error("Error synchronizing database:", syncError);
      });
  })
  .catch((dbError) => {
    console.error("Unable to connect to the database:", dbError);
  });
