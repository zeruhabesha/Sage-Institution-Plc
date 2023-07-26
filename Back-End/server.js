const express = require('express');
const app = express()
const mongoose  = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const {MONGO_URI, JWT_SECRET} = require('./conn')
const requireAuth = require('./middlware/requireAuth');
const session = require('express-session');
// const studentsRouter = require('./routes/students');


mongoose.connect(MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })

mongoose.connection.on('connected',()=>{
    console.log("mongodb is connected");
})
// app.use('/uploads', express.static('uploads'));
// app.use('/students', studentsRouter);

require('./models/Account')
require('./models/Attendance')
require('./models/Contact')
require('./models/Course')
require('./models/Grade')
require('./models/Library')
require('./models/Blog')

app.use(express.json())
app.use(cors())
app.use(require("./routes/Account"))
app.use(require("./routes/Attendance"))
app.use(require("./routes/Course"))
app.use(require("./routes/Grade"))
app.use(require("./routes/Library"))
app.use(require("./routes/blogs"))

app.use(session({
    secret: JWT_SECRET,
    resave: true,
    saveUnmodified: false,
    saveUninitialized: true,
  }));
  
  app.get('/adminhome', (req, res) => {
    const sessionData = req.session.data;
    const name = sessionData.name;
    res.json({ name });
  });


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})