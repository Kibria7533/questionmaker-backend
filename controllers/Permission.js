const Role=require("../models/Role")
const mongoose = require("mongoose");
const Permission=require("../models/Permission")


const permisssionAssginToRole=async(req,res)=>{
  const roleId=req.body.roleId
  const permissonId=req.body.permissionId

  const role = await Role.updateOne(
    { _id: roleId},
    { $push: { permissions: permissonId } }
  );

  res.json({role})
}


// create a new role;
const createAPermission= async (req, res) => {
  try {
    const { permissionName, title, slug, description } = req.body;

    const { rid } = req.params;

    if (!mongoose.Types.ObjectId.isValid(rid)) {
      res.status(404).json({ message: "permission  not found" });
      return;
    }


    await Promise.resolve().then(async () => {

      // create  permission
      const permission = await Permission.create({permissionName, title, slug, description});

      // update  roles permission property
        const data=await Role.findByIdAndUpdate(rid,{
          $addToSet:{
            permissions:permission._id
          }
        });
    
      res.status(200).json(permission);
    });

  } catch (error) {
    res.status(400).json({
      message: "permission not found",
    });
  }
};

// create a new role;
const updateAPermission= async (req, res) => {
  try {
    const { permissionName, title, slug, description } = req.body;

    const { rid } = req.params;
    if (!mongoose.Types.ObjectId.isValid(rid)) {
      res.status(404).json({ message: "permission  not found" });
      return;
    }


    await Promise.resolve().then(async () => {

      // update  permission
      const permission = await Permission.findByIdAndUpdate(rid,{permissionName, title, slug, description},{new:true});
    
      res.status(200).json(permission);
    });

  } catch (error) {
    res.status(400).json({
      message: "permission not found",
    });
  }
};

// delete an role
const deleteAnPermission = async (req, res) => {
  try {
    const { rid } = req.params;
    console.log(rid)
    if (!mongoose.Types.ObjectId.isValid(rid)) {
      res.status(404).json({ message: "permission not found" });
      return;
    }

    await Promise.resolve().then(async () => {
      const permission = await Permission.findByIdAndDelete(rid);
      res.status(200).json(permission);
    });

  } catch (error) {
    res.status(400).json({
      message: "role not found",
    });
  }
};


module.exports = { createAPermission,updateAPermission,deleteAnPermission,permisssionAssginToRole };
