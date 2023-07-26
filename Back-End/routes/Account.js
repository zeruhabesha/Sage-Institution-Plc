const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Account = mongoose.model("Account")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const upload = require("../middlware/multer");
// const requireAuth = requireAuth;
const fs = require('fs');
const path = require('path');

const requireAuth = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authorizationHeader.split(" ")[1]; // "Bearer token"

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decodedToken._id;
    next();
  });
};


const expressSession = require('express-session');

router.get("/data", (req, res) => {
  const sessionData = req.session.data;

  if (sessionData) {
    res.json(sessionData);
  } else {
    res.sendStatus(404);
  }
});
// Create new Account
router.post('/api/Accounts',upload.single('file'), async (req, res) => {
  try {
    const {  
      first_name,middle_name,last_name,username,
      email,  password,
      phone, address, dob,
      department,
      class_enrollment, class_schedule,
      role, start_date, end_date,
      class_assigned,staff_posion,
      status,grade,
      date_updated,
      } = req.body;
      const file = req.file.path;
    const lastAccount = await Account.findOne().sort({ Id_no: -1 });
    let newAccountId = 'S-0001';

    if (lastAccount) {
      const lastAccountId = lastAccount.Id_no;
      const lastId = parseInt(lastAccountId.substring(2), 10);
      newAccountId = `S-${('0000' + (lastId + 1)).slice(-4)}`;
    }

    const Account = new Account({
      Id_no: newAccountId,
      first_name,middle_name,last_name,username,
      email,  password,
      phone, address, dob,
      department,
      class_enrollment, class_schedule,
      role, start_date, end_date,
      file,class_assigned,staff_posion,
      status,grade,
      date_updated,

    });

    const newAccount = await Account.save();
    res.status(201).json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/addacc', upload.single('file'), async (req, res) => {
  console.log(req.body);
  const lastAccount = await Account.findOne().sort({ Id_no: -1 });
  let newAccountId = 'S-0001';

  if (lastAccount) {
    const lastAccountId = lastAccount.Id_no;
    const lastId = parseInt(lastAccountId.substring(2), 10);
    newAccountId = `S-${('0000' + (lastId + 1)).slice(-4)}`;
  }
  const {
    first_name,
    middle_name,
    last_name,
    username,
    email,
    password,
    phone,
    address,
    dob,
    department,
    class_enrollment,
    class_schedule,
    role,
    start_date,
    end_date,
    class_assigned,
    staff_posion,
    status,
    grade,
    date_updated,
  } = req.body;
  const file = req.file;
  const filename = file.filename;

  if (!email) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  const savedUser = await Account.findOne({ email });
  if (savedUser) {
    return res.status(422).json({ error: "User already exists with that email" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new Account({
    Id_no: newAccountId,
    password: hashedPassword,
    first_name,
    middle_name,
    last_name,
    username,
    email,
    phone,
    address,
    dob,
    department,
    class_enrollment,
    class_schedule,
    role,
    start_date,
    end_date,
    file:filename,
    class_assigned,
    staff_posion,
    status,
    grade,
    date_updated,
  });

  try {
    await user.save();
    res.json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});



router.post('/accLogin', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  }
  Account.findOne({ email: email })
    .then(savedUser => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid Email or password" });
      }
      console.log(savedUser);
      bcrypt.compare(password, savedUser.password)
        .then(doMatch => {
          if (doMatch) {
            if (savedUser.status === "Active") { // Check if user status is active
              const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
              const {
                _id, password: hashedpassword,
                first_name, middle_name, last_name, username,
                email, password,
                phone, address, dob,
                department,
                class_enrollment, class_schedule,
                role, start_date, end_date,
                file, class_assigned, staff_posion,
                status,grade,
                date_updated
              } = savedUser;

              res.json({
                token,
                user: {
                  _id, password: hashedpassword,
                  first_name, middle_name, last_name, username,
                  email, password,
                  phone, address, dob,
                  department,
                  class_enrollment, class_schedule,
                  role, start_date, end_date,
                  file, class_assigned, staff_posion,
                  status,grade,
                  date_updated
                }
              });
            } else {
              return res.status(422).json({ error: "User is not active" });
            }
          } else {
            return res.status(422).json({ error: "Invalid Email or password" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
});

// router.post('/accLogin',(req,res)=>{
//   const {email,password} = req.body
//   console.log(req.body)
//   if(!email || !password){
//      return res.status(422).json({error:"please add email or password"})
//   }
//   Account.findOne({email:email})
//   .then(savedUser=>{
//       if(!savedUser){
//          return res.status(422).json({error:"Invalid Email or password"})
//       }
//       console.log(savedUser)
//       bcrypt.compare(password,savedUser.password)
//       .then(doMatch=>{
//           if(doMatch){
           
//              const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
//              const {_id,   password:hashedpassword,
//               first_name,middle_name,last_name,username,
//               email,  password,
//               phone, address, dob,
//               department,
//               class_enrollment, class_schedule,
//               role, start_date, end_date,
//               file,class_assigned,staff_posion,
//               status,
//               date_updated} = savedUser
             
     
//              res.json({
//                 token,
//                 user:{
//                   _id,   password:hashedpassword,
//                   first_name,middle_name,last_name,username,
//                   email,  password,
//                   phone, address, dob,
//                   department,
//                   class_enrollment, class_schedule,
//                   role, start_date, end_date,
//                   file,class_assigned,staff_posion,
//                   status,
//                   date_updated
//                 }
//              })
//           }
//           else{
//               return res.status(422).json({error:"Invalid Email or password"})
//           }
//       })
//       .catch(err=>{
//           console.log(err)
//       })
//   })
// })



// Fixed code
async function login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }

  const user = await Account.findOne({ email: email });

  if (!user) {
    return res.status(422).json({ error: "Invalid Email or password" });
  }

  const session = req.session;

  if (user) {
    
    session.user = await user.data;
    session.save();
  }

  res.json({
    user: user,
    message: "Successfully logged in"
  });
}

router.post('/login', login);

router.put('/editaccount/:id', (req, res) => {
	Account.findByIdAndUpdate(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data updated successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
  });
  
  
  router.delete('/deleteaccount/:id', (req, res) =>{
    Account.findByIdAndRemove(req.params.id, req.body)
	  .then(data => res.json({ msg: 'Data deleted successfully' }))
	  .catch(err => res.status(400).json({ error: 'Unable to delete this data' }));
  })

  router.get("/viewstud/:filename", (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, "uploads", filename);
  
    if (!fs.existsSync(imagePath)) {
      res.status(404).send("Image not found");
      return;
    }
  
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = Buffer.from(imageBuffer).toString("base64");
  
    res.send({
      image: base64Image,
    });
  });
  
  router.get("/viewstud",requireAuth, (req, res) => {
    Account.find({ role: "students" })
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });

router.get('/viewinst',requireAuth, (req, res) => {
    Account.find({ role: "instructors" })
      .then((data) => res.json(data))
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });

  // router.get("/viewstaff", (req, res) => {
  //   Account.find({ role: "staffs" })
  //     .then((data) => res.json(data))
  //     .catch((err) => res.status(404).json({ data: "data not found" }));
  // });
  router.get("/viewstaff", requireAuth, (req, res) => {
    Account.find({ role: "staffs" })
      .populate("file") // Populate the 'file' field
      .then((data) => {
        const modifiedData = data.map((user) => ({
          ...user._doc,
          photoUrl: user.file ? `http://localhost:5000/uploads/${user.file.filename}` : null,
        }));
        res.json(modifiedData);
      })
      .catch((err) => res.status(404).json({ data: "data not found" }));
  });



  router.put('/updatepic',(req,res)=>{
    console.log(req.user)
    Account.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
         console.log(result)
    })
 
})

module.exports = router