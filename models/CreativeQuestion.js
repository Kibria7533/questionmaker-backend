







const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Creative Question Schema
const CreativeQuestionSchema = new Schema({
    QuestionID: {
      type: Schema.Types.ObjectId,
      ref: 'Question'
    },
    CreativeDescription: {
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
  
const CreativeQuestion = mongoose.model('CreativeQuestion', CreativeQuestionSchema);
  
module.exports = {
    CreativeQuestion
  };