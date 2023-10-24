const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ClassSubject Schema
const ClassSubjectSchema = new Schema({
    ClassID: {
      type: Schema.Types.ObjectId,
      ref: 'Class'
    },
    SubjectID: {
      type: Schema.Types.ObjectId,
      ref: 'Subject'
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
  
const ClassSubject = mongoose.model('ClassSubject', ClassSubjectSchema);
  
module.exports = {
    ClassSubject
  };