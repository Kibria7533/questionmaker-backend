const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../utlils/generateToken");

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

// Get all classes
router.get("/", async (req, res) => {
  try {
    const classes = await Cls.find({});
    res.send(classes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a cls
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { ClassName } = req.body;

  try {
    const cls = await Cls.findByIdAndUpdate(id, { ClassName }, { new: true });
    res.send(cls);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a cls
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const cls = await Cls.findByIdAndDelete(id);
    res.send(cls);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
