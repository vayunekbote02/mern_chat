const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const gTASC = require("../utils/generateToken");

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials." });
    }
    // Hash Password
    const decodedPassword = bcrypt.compareSync(password, user.password);

    if (decodedPassword) {
      gTASC(user._id, res);
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid Credentials." });
    }
  } catch (err) {
    console.log(err.message);
  }
};

const signupController = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash Password
    const hashedPassword = bcrypt.hashSync(password);
    // Profile Picture
    let profilePic;
    if (gender === "male") {
      profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    } else {
      profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    }

    const newUser = await UserModel.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      gTASC(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Could not create user." });
    }
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      res.status(404).json({ error: "Signup failed" });
    }
  }
};

const logoutController = (req, res) => {
  try {
    res.clearCookie("jwt_token");
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (err) {
    console.log("Error Message: ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { loginController, signupController, logoutController };
