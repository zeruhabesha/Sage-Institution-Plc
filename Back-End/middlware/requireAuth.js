const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Check if the user is authenticated
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    // The user is not authenticated
    return res.redirect('/login');
  }

  // Verify the token
  try {
    const decodedToken = jwt.verify(token,JWT_SECRET);
    // The user is authenticated

    // Create a session for the user
    const session = req.session;
    session.user = decodedToken.user;
    session.save();

    next();
  } catch (error) {
    // The token is invalid
    return res.redirect('/login');
  }
};

