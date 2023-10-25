const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Role Schema
const RoleSchema = new Schema({
    roleName: {
      type: String,
      required: true
    },
    permissions:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
      }
    ]
  },{timestamps:true});
  
const Role = mongoose.model('Role', RoleSchema);
  
module.exports = Role