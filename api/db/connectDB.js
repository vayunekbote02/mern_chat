const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database.");
  } catch (err) {
    console.log("Error connecting to database", err.message);
  }
};

module.exports = connectDB;
