
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema;

let msgSchema = new Schema({
 
  name: {
    type: String,
    required : true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required : true
  }
  },
  {
    // create collocation
    collection: 'message'
})

module.exports = mongoose.model('Message', msgSchema)
