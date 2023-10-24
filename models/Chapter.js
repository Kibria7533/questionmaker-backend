const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Chapter Schema
const ChapterSchema = new Schema({
    ChapterName: {
      type: String,
      required: true
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
  
const Chapter = mongoose.model('Chapter', ChapterSchema);
  
module.exports = {
    Chapter
  };