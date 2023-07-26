
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let librarySchema = new Schema({

  name: {
    type: String
  },
  department: {
    type: String
  },
  file: {
    type: String,
    // required: true,
    // unique: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'library'
})

module.exports = mongoose.model('Library', librarySchema)
