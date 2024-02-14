const asyncHandler = require('express-async-handler');

// @desc    Signup a new user
// @route   POST /api/users/signup
// @access  Public
const signupUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, age } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !password || !age) {
    res.status(400);
    throw new Error('Please fill in all fields');
  } else if (password.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters');
  } else if (age < 18) {
    res.status(400);
    throw new Error('You must be at least 18 years old');
  } else {
    res.status(201);
  }

  res.send('User registered!');
});

// @desc    Signin a new user
// @route   POST /api/users/login
// @access  Public
const signinUser = asyncHandler(async (req, res) => {
  res.send('User logged in!');
});

module.exports = {
  signupUser,
  signinUser,
};
