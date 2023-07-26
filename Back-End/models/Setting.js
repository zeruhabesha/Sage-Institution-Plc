
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let settingSchema = new Schema({

  site_name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  map: {
    type: String
  },
  fb: {
    type: Date
  },
  twitter: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  },
  youtube: {
    type: String
  },
  
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'setting'
})

module.exports = mongoose.model('Setting', settingSchema)
