const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Answer Schema
const AnswerSchema = new Schema({
    QuestionID: {
      type: Schema.Types.ObjectId,
      ref: 'Question'
    },
    AnswerText: {
      type: String,
      required: true
    },
    IsCorrect: {
      type: Boolean,
      default: false
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
  
const Answer = mongoose.model('Answer', AnswerSchema);
  
module.exports = {
    Answer
  };