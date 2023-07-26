
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let gradeSchema = new Schema({
  s_id: {
    type: String
  },
  s_grade: {
    type: String
  },
  course_id: {
    type: String
  },
  course_name: {
    type: String
  },
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'grade'
})

module.exports = mongoose.model('Grade', gradeSchema)
