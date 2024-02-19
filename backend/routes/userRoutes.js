const express = require('express');
const router = express.Router();
const {
  signupUser,
  signinUser,
  getUserProfile,
} = require('../controllers/userController.js');

const { protect } = require('../middleware/authMiddleware');

// Routes
router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
