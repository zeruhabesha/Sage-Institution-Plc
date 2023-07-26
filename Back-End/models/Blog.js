const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  writer: {
    type: String,
    // required: true,
  },
  owner: {
    type: String,
    // required: true,
  },
  blog: {
    type: String,
    // required:true,
  },
  content: {
    type: String,
    // required:true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Blog = mongoose.model("blog", BlogSchema);
