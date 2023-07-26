const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const mongoose = require('mongoose');
const Account = mongoose.model('account');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const payload = await jwt.verify(token, JWT_SECRET);

    const { _id } = payload;

    const userdata = await Account.findById(_id);

    // Create a session for the user
    const session = req.session;
    session.user = userdata;
    session.save();

    next();
  } catch (err) {
    return res.status(401).json({ error: 'You must be logged in' });
  }
};