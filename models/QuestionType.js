const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// QuestionType Schema
const QuestionTypeSchema = new Schema({
    TypeName: {
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
  
const QuestionType = mongoose.model('QuestionType', QuestionTypeSchema);
  

module.exports = {
    QuestionType
  };