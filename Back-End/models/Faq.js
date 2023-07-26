
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let faqSchema = new Schema({

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
    collection: 'faq'
})

module.exports = mongoose.model('Faq', faqSchema)
