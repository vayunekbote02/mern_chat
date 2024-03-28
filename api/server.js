// Imports
const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db/connectDB");
const cookieParser = require("cookie-parser");
const { app, server } = require("./socket/socket");
// Initializations and configurations

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Server start
server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
