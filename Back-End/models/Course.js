
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let courseSchema = new Schema({
  course_code: {
    type: String
  },
  course_name: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  schedule: {
    type: Date
  },
  status: {
    type: String
  },
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'course'
})

module.exports = mongoose.model('Course', courseSchema)
