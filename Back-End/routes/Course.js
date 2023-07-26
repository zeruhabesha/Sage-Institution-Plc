const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const requireLogin=require('../middleware/requireLogin')
const Course = mongoose.model("Course")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')




  
router.post('/addcorse', async (req, res) => {
    try {
      const {course_code, course_name, start_date, end_date, schedule, status
        } = req.body;
  
      const QQ = new Course({
        course_code, course_name, start_date, end_date, schedule, status  
  
      });
  
      const newQQ = await QQ.save();
      res.status(201).json(newQQ);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


router.put('/editcorse/:id', (req, res) => {
	Course.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
  router.delete('/deletecorse/:id', (req, res) =>{
    Course.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })

  router.get("/viewcorse", (req, res) => {
    Course.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });
  








module.exports = router