const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const requireLogin=require('../middleware/requireLogin')
const Library = mongoose.model("Library")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const upload = require("../middlware/multer");
const {downloadFile} = require("../controllers/technical");

router.route("/download/:id").get(downloadFile);
router.post('/addlib',upload.single('file'), async (req, res) => {
  try {
    const {name, department, title ,description
      } = req.body;
      const file = req.file.path;

    const QQ = new Library({
      name, department, title ,description
      ,file

    });

    const newQQ = await QQ.save();
    res.status(201).json(newQQ);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.put('/editlib/:id', (req, res) => {
	Library.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
  router.delete('/deletelib/:id', (req, res) =>{
    Library.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })



  router.get("/viewlib", (req, res) => {
    Library.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });
  



module.exports = router