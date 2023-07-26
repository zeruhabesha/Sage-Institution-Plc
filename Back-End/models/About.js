
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let aboutSchema = new Schema({
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
    collection: 'about'
})

module.exports = mongoose.model('About', aboutSchema)
