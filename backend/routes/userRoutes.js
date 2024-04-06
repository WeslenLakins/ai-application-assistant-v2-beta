const express = require('express');
const router = express.Router();
const {
  signupUser,
  signinUser,
  getUserProfile,
  oauthUser
} = require('../controllers/userController.js');

const { protect } = require('../middleware/authMiddleware');

// Routes
router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.get('/profile', protect, getUserProfile);
router.post('/oauth', oauthUser);


module.exports = router;
