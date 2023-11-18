const express = require("express");
const router = express.Router();

const {isAuthenticated}=require("../middlewares/isAuthenticated");
const {createARole,updateARole,deleteAnRole,roleAssginToUser}=require("../controllers/Role");
const { isAdmin } = require("../middlewares/isAdmin");


//role assign to user

router.post("/",isAuthenticated,isAdmin,roleAssginToUser)

// create a role
router.post("/create/:uid",isAuthenticated,createARole );

//update a role
router.put("/:rid",isAuthenticated,updateARole);

// delete  a role
router.delete("/:rid",isAuthenticated,deleteAnRole);

// get all  a role
router.get("/",isAuthenticated,);

module.exports = router;
