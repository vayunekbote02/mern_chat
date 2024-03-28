// Imports
const express = require("express");
const path = require("path");
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

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// Server start
server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on PORT ${PORT}`);
});
