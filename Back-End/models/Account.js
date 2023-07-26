const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

let accountSchema = new Schema({
  Id_no: {
    type: String,
    unique: true
  },
  first_name: {
    type: String
  },
  middle_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  dob: {
    type: Date
  },
  phone: {
    type: String
  },
  department: {
    type: String
  },
  class_enrollment: {
    type: Date
  },
  class_schedule: {
    type: Date
  },
  class_assigned: {
    type: String
  },
  staff_position: {
    type: String
  },
  role: {
    type: String
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  file: {
    type: String
  },
  status: {
    type: String
  },  
  grade: {
    type: String
  },
  date_updated: {
    type: Date,
    default: Date.now
  }
});

accountSchema.pre('save', async function (next) {
  try {
    if (!this.Id_no) {
      const lastAccount = await Account.findOne({}, {}, { sort: { Id_no: -1 } });

      if (lastAccount) {
        const lastAccountId = parseInt(lastAccount.Id_no.slice(2));
        this.Id_no = 'S-' + ('0000' + (lastAccountId + 1)).slice(-4);
      } else {
        this.Id_no = 'S-0001';
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

mongoose.model("Account", accountSchema);

// Create a session for the user after they have been successfully logged in.
// The session will contain the user's ID, name, email address, and role.
// This will allow you to identify the user in future requests and to restrict access to certain routes based on the user's role.

async function createSession(user) {
  const session = req.session;
  session.user = user;
  session.save();
}