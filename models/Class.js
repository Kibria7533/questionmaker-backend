const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Class Schema
const ClassSchema = new Schema({
  ClassName: {
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

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;

