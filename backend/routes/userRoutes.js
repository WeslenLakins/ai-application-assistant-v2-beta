const express = require('express');
const router = express.Router();
const { signupUser, signinUser } = require('../controllers/userController.js');

// Routes
router.post('/signup', signupUser);
router.get('/signin', signupUser);

module.exports = router;
