const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const requireLogin=require('../middleware/requireLogin')
const Grade = mongoose.model("Grade")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')




  
router.post('/addgrade', async (req, res) => {
    try {
      const {s_id, s_grade, course_id, course_name
        } = req.body;
  
      const QQ = new Grade({
        s_id, s_grade, course_id, course_name
  
  
      });
  
      const newQQ = await QQ.save();
      res.status(201).json(newQQ);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


// router.get('/allGrade', async(req, res) =>{
//   try {
//       const requests = await Grade.find({});
//       res.status(200).json(requests);
//   } catch (error) {
//       res.status(500).json({message: error.message})
//   }

// })

router.put('/editgrade/:id', (req, res) => {
	Grade.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
  router.delete('/deletegrade/:id', (req, res) =>{
    Grade.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })

  
  router.get("/viewgrade", (req, res) => {
    Grade.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });
  








module.exports = router