const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Role Schema
const PermissionSchema = new Schema({
    permissionName: {
      type: String,
      required: true
    },
    title:{
      type:String,
      required:true
    },
    slug:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
  },{timestamps:true});
  
const Permission = mongoose.model('Permission', PermissionSchema);
  
module.exports = Permission