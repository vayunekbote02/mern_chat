const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const protectRoute = async (req, res, next) => {
  try {
    // Check token
    const token = req.cookies.jwt_token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(403).json({ error: "Forbidden!" });
    }

    const user = await UserModel.findById(decoded.userID).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log("Error in the protectRoute: ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = protectRoute;
