
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Multiple Choice Option Schema
const MultipleChoiceOptionSchema = new Schema({
    MultipleChoiceQuestionID: {
      type: Schema.Types.ObjectId,
      ref: 'MultipleChoiceQuestion'
    },
    OptionText: {
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
  
const MultipleChoiceOption = mongoose.model('MultipleChoiceOption', MultipleChoiceOptionSchema);
  
module.exports = {
    MultipleChoiceOption
  };