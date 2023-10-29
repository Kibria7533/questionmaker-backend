const Role=require("../models/Role")
const mongoose = require("mongoose");
const User = require("../models/User");


// create a new role;
const createARole= async (req, res) => {
  try {
    const { roleName, title, slug, description } = req.body;
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
      // create  role
      const role = (await Role.create({roleName, title, slug, description}));

      // update user roles property
      await User.findByIdAndUpdate(uid,{
        $addToSet:{
          roles:role._id
        }
      })
      res.status(200).json(role);
    });

  } catch (error) {
    res.status(400).json({
      message: "user not found",
    });
  }
};


// update a role
const updateARole= async (req, res) => {
  try {
    const { roleName, title, slug, description } = req.body;

    //role id
    const { rid } = req.params;
 
    if (!mongoose.Types.ObjectId.isValid(rid)) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    await Promise.resolve().then(async () => {
      // update  role
      const role = await Role.findByIdAndUpdate(rid,{roleName, title, slug, description},{new:true});

      res.status(200).json(role);
    });

  } catch (error) {
    res.status(400).json({
      message: "user not found",
    });
  }
};


// delete an role
const deleteAnRole = async (req, res) => {
  try {
    const { rid } = req.params;
    const userId = req.user?._id;


    if (!mongoose.Types.ObjectId.isValid(rid)) {
      res.status(404).json({ message: "role not found" });
      return;
    }

    const existingRole=await Role.findById(rid);
    if(!existingRole){
      res.status(403).json({message:"role doesn't exist"})
      return;
    }

    const user=await User.findById(userId)

    const matchRole=user?.roles?.find((role)=>role._id.toString()===rid);

    if(!matchRole){
      res.status(403).json({message:"Role doesn't exist"})
      return
    }

    await Promise.resolve().then(async () => {
      const role = await Role.findByIdAndDelete(rid);
      res.status(200).json(role);
    });
  } catch (error) {
    res.status(400).json({
      message: "role not found",
    });
  }
};


module.exports = { createARole,updateARole,deleteAnRole };
