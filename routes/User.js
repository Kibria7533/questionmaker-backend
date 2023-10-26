const express = require("express");
const router = express.Router();

const {isAuthenticated}=require("../middlewares/isAuthenticated")
const {getAnUser,deleteAnUser,updateAnUser,getAnAllUser}=require("../controllers/User")


// get an user
router.get("/:uid",isAuthenticated, getAnUser);

//update an user
router.put("/:uid",isAuthenticated,updateAnUser);

// delete  an user
router.delete("/:uid",isAuthenticated, deleteAnUser);

// get all  an user
router.get("/",isAuthenticated,getAnAllUser);

module.exports = router;
