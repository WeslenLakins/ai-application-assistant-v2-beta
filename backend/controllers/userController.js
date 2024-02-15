const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

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
  }

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    age,
  });

  // Send a response
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Signin a new user
// @route   POST /api/users/login
// @access  Public
const signinUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// Generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  signupUser,
  signinUser,
};
