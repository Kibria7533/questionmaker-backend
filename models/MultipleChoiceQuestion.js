const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Multiple Choice Question Schema
const MultipleChoiceQuestionSchema = new Schema({
    QuestionID: {
      type: Schema.Types.ObjectId,
      ref: 'Question'
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
  
const MultipleChoiceQuestion = mongoose.model('MultipleChoiceQuestion', MultipleChoiceQuestionSchema);
  
module.exports = {
    MultipleChoiceQuestion
  };