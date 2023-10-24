// Fill in the Gap Question Schema
const FillInTheGapQuestionSchema = new Schema({
    QuestionID: {
      type: Schema.Types.ObjectId,
      ref: 'Question'
    },
    GapText: {
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
  
const FillInTheGapQuestion = mongoose.model('FillInTheGapQuestion', FillInTheGapQuestionSchema);
  
module.exports = {
    FillInTheGapQuestion
  };