const express = require("express");
const router = express.Router();

const {isAuthenticated}=require("../middlewares/isAuthenticated");

const {createAPermission,updateAPermission,deleteAnPermission}=require("../controllers/Permission")

// create a permission
router.post("/create/:rid",isAuthenticated,createAPermission);

//update a permission
router.put("/:rid",isAuthenticated,updateAPermission);

// delete  a permission
router.delete("/:rid",isAuthenticated,deleteAnPermission);

// get all  a permission
// router.get("/",isAuthenticated,);

module.exports = router;
