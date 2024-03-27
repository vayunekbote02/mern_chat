const express = require("express");
const {
  loginController,
  signupController,
  logoutController,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signupController);
router.post("/logout", logoutController);

module.exports = router;
