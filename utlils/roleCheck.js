
const Permission = require('../models/Permission');
const Role=require('../models/Role');

const roleCheck=async(roles,roleName)=>{
      // const role=await Role.find()
  const role=  await  Role.find({
        _id: { $in: roles },
        roleName: roleName
      });
      
      return  role.length? true:false
}




const hasPermissionCheck=async(roles,permissionKey)=>{
 // Step 1: Retrieve permissions associated with the roles
 const roleArray = await Role.find({ _id: { $in: roles } })

 console.log("roleArray",roleArray)


 const permissionIds = roleArray.flatMap(role => role.permissions);
console.log(permissionIds)
 // Step 2: Check if any of these permissions have the desired permissionKey
 const hasReadClassPermission = await Permission.findOne({
   _id: { $in: permissionIds },
   permissionName: 'read_class'
 });

 if (hasReadClassPermission) {
   console.log('At least one role has "read_class" permission.');
 } else {
   console.log('No role has "read_class" permission.');
 }
}


module.exports={
  roleCheck,
  hasPermissionCheck
}