const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Question Schema
const QuestionSchema = new Schema({
    QuestionText: {
      type: String,
      required: true
    },
    ChapterID: {
      type: Schema.Types.ObjectId,
      ref: 'Chapter'
    },
    Marks: {
      type: Number
    },
    QuestionTypeID: {
      type: Schema.Types.ObjectId,
      ref: 'QuestionType'
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
  
const Question = mongoose.model('Question', QuestionSchema);
  
module.exports = {
    Question
  };