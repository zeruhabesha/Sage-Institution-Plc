const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const requireLogin=require('../middleware/requireLogin')
const Attendance = mongoose.model("Attendance")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')


// router.post('/addattend', async (req, res) => {
//     try {
//       const {aid, first_name, role, department, status
//         } = req.body;
  
//       const QQ = new Attendance({
//         aid, first_name, role, department, status
//       });
  
//       const newQQ = await QQ.save();
//       res.status(201).json(newQQ);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   });


router.post('/addattend', async (req, res) => {
  const { Id_no,first_name,middle_name,username,email,role,department, status, date } = req.body;
  const attendance = new Attendance({ Id_no,first_name,middle_name,username,email,role,department, status, date });
  await attendance.save();
  res.json(attendance);
});
  // let students = [];  // Replace this with your actual data source

  // router.get('/students', (req, res) => {
  //   res.json(students);
  // });
  
  // router.post('/addattend', (req, res) => {
  //   const checkedStudents = req.body.checkedStudents;
  //   checkedStudents.forEach(sid => {
  //     const student = students.find(s => s.sid === sid);
  //     if (student) {
  //       student.Attendance = true;  // Mark the student as attended
  //     }
  //   });
  //   res.status(200).json({message: 'The data is add successfully'});
  // });

  router.get("/viewattstud", (req, res) => {
    Attendance.find({ role: "student" })
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });

  router.get("/viewattinst", (req, res) => {
    Attendance.find({ role: "instructor" })
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not¬ found" }));
  });


  router.get("/viewattstaff", (req, res) => {
    Attendance.find({ role: "staff" })
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });


router.put('/editattend/:id', (req, res) => {
	Attendance.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
  router.delete('/deleteattend/:id', (req, res) =>{
    Attendance.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })

router.get('/allAttendance',(req,res)=>{
 

  Attendance.find()
    
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})








module.exports = router