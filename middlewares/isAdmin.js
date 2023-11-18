
const { roleCheck } = require("../utlils/roleCheck");

const isAdmin=async(req,res,next)=>{
    
const admin= await roleCheck(req.user?.roles,"admin");

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