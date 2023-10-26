const jwt =require("jsonwebtoken");

const generateToken=(id)=>{
  try{
    const token =jwt.sign({id},process.env.JWT_KEY,{expiresIn:"3d"});
    return token
  }catch(error){
    throw new Error("Token creation failed");
  }
}

module.exports=generateToken;