const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Subject Schema
const SubjectSchema = new Schema({
    SubjectName: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    deleted_at: {
      type: Date
    }
  });
  
const Subject = mongoose.model('Subject', SubjectSchema);
  
module.exports = {
    Subject
  };