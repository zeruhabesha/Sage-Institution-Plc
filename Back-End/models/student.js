const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  photo: String,
  sid: String,
  firstName: String,
  lastName: String,
  department: String,
  role: String,
  status: String
});

module.exports = mongoose.model('Student', studentSchema);