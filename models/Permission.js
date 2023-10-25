const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Role Schema
const PermissionSchema = new Schema({
    permissionName: {
      type: String,
      required: true
    }
  },{timestamps:true});
  
const Permission = mongoose.model('Permission', PermissionSchema);
  
module.exports = Permission