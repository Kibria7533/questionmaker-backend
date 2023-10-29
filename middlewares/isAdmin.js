const User = require("../models/User");

const isAdmin=async(req,res,next)=>{
      const userId=req.user?._id;
      const user=await User.findByIdAndUpdate(userId)
  console.log(user)
      const admin=user.roles.filter((role)=>role.roleName==="admin");
     console.log(admin)
        if(admin){
          next();
        }else{
          res.status(403).json({
            message:"Forbidden"
          })
          return
        }
}

module.exports={isAdmin};