const User = require("../models/User");
const mongoose = require("mongoose");

// get an user
const getAnUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const userId = req.user?._id;

    if (!mongoose.Types.ObjectId.isValid(uid)) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    if (uid !== userId.toString()) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    await Promise.resolve().then(async () => {
      const user = await User.findById(uid);
      res.status(200).json(user);
    });
  } catch (error) {
    res.status(400).json({
      message: "user not found",
    });
  }
};

// update and user
const updateAnUser = async (req, res) => {
  try {
    const { firstName, middleName, lastName, mobile } = req.body;
    const { uid } = req.params;
    const userId = req.user?._id;

    if (!mongoose.Types.ObjectId.isValid(uid)) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    if (uid !== userId.toString()) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    await Promise.resolve().then(async () => {
      const user = await User.findByIdAndUpdate(uid,{firstName, middleName, lastName, mobile},{new:true});
      res.status(200).json(user);
    });

  } catch (error) {
    res.status(400).json({
      message: "user not found",
    });
  }
};

// delete an user
const deleteAnUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const userId = req.user?._id;

    if (!mongoose.Types.ObjectId.isValid(uid)) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    if (uid !== userId.toString()) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    await Promise.resolve().then(async () => {
      const user = await User.findByIdAndDelete(uid);
      res.status(200).json(user);
    });
  } catch (error) {
    res.status(400).json({
      message: "user not found",
    });
  }
};


// get an user
const getAnAllUser = async (req, res) => {
  try {
    await Promise.resolve().then(async () => {
      const user = await User.find({}).populate("roles");
      res.status(200).json(user);
    });
  } catch (error) {
    res.status(400).json({
      message: "user not found",
    });
  }
};
module.exports = { getAnUser, deleteAnUser, updateAnUser,getAnAllUser };
