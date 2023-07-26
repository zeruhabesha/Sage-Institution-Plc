
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let attendanceSchema = new Schema({
  Id_no: {
    type: String
  },
  first_name: {
    type: String
  }, 
  middle_name: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  department: {
    type: String
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
    collection: 'attendance'
})

module.exports = mongoose.model('Attendance', attendanceSchema)
