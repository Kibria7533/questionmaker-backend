const express = require("express");
const router = express.Router();
const User = require("../models/User");
const  generateToken  = require("../utlils/generateToken");

// register
router.post("/register", async (req, res) => {

  try {

    const { firstName, middleName, lastName, mobile, email, password } =
      req.body;
    const user = await User.register(
      firstName,
      middleName,
      lastName,
      mobile,
      email,
      password
    );
  
    const token = generateToken(user._id);

    res.status(200).json({ user, token });

  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

// login
router.post("/login", async (req, res) => {
  try {

    const { email, password } =req.body;
    const user = await User.login(
      email,
      password
    );
    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});


module.exports = router;
