const express = require('express');
const router = express.Router();
const {
  createQuestions,
  getQuestions,
  getQuestionById,
} = require('../controllers/questionController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createQuestions).get(protect, getQuestions);

router.route('/:id').get(protect, getQuestionById);

module.exports = router;