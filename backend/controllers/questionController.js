const asyncHandler = require('express-async-handler');
const OpenAI = require('openai');
const User = require('../models/userModel');
const Question = require('../models/questionModel');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

// @desc        Create a questionsAndAnswers document with OpenAI
// @route       POST /api/questions
// @access      Private

const createQuestions = asyncHandler(async (req, res) => {

  // Get the user using the id in the token
  const user = await User.findById(req.user._id);
    // If the user is not found, throw an error
    if (!user) {
      res.status(401);
      throw new Error('User not found');
    }

    // Destructure fields from the request body
    const { jobTitle, company, location, jobDescription, currentResume } = req.body;

    // If any of the fields are missing, throw an error
    if (!jobTitle || !company || !location || !jobDescription || !currentResume) {
      res.status(400);
      throw new Error('Please provide all fields');
    }

    // Generate the prompt for the OpenAI API call
    const prompt = `Given the following inputs:

    - Job Title: ${jobTitle}
    - Company: ${company}
    - Location: ${location}
    - Job Description: ${jobDescription}
    - User's Resume: ${currentResume}

    Generate a list of 12-17 interview questions and answers that are highly relevant to the specified position at the mentioned company. The questions should cover various aspects critical to the role, including technical skills, soft skills, company values, and how the user's experience and qualifications make them a suitable candidate.

    Structure the output as follows:

    1. Question: [Interview Question 1]
    Answer: [Suggested Answer based on the User's Resume and Job Description]
    
    2. Question: [Interview Question 2]
    Answer: [Suggested Answer based on the User's Resume and Job Description]
    
    ...continue until 12-17 questions are listed...

    Ensure each question and answer is specifically tailored to the intersection of the job requirements and the user's professional background. The questions should not only evaluate the user's capability and fit for the role but also their potential contributions to the company culture and goals. The answers should reflect thoughtful consideration of the user's experiences, skills, and achievements relevant to the job and company. Organize the questions and answers logically, progressing from general to role-specific inquiries. Focus on creating a dialogue that showcases the user's readiness for the position, their understanding of the company's mission, and their potential impact on the team and broader organizational objectives.`;

    // Generate the questionsAndAnswers using OpenAI
    let questionsAndAnswers;
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
      });
      questionsAndAnswers = completion.choices[0].message.content;
    } catch (error) {
      console.error('Error in OpenAI API call:', error);
      if (error.response) {
        // If the error response from OpenAI API includes details, log or use them
        console.error('OpenAI API error response:', error.response.data);
        res.status(500).json({ error: error.response.data });
      } else {
        // For other types of errors (e.g., network issues)
        res.status(500).json({ error: 'Error in OpenAI API call' });
      }
      return;
    }

    // Create a new question with the user's id, jobTitle, company, location, jobDescription, currentResume, and questionsAndAnswers
    const question = await Question.create({
      user: req.user._id,
      jobTitle,
      company,
      location,
      jobDescription,
      currentResume,
      questionsAndAnswers,
    });

    // Return the created question
    res.status(201).json(question);
});

// @desc        Get all questions
// @route       GET /api/questions
// @access      Private

const getQuestions = asyncHandler(async (req, res) => {
  // Get the user using the id in the token
  const user = await User.findById(req.user._id);

  // If the user is not found, throw an error
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Find all questions associated with the user
  const questions = await Question.find({ user: req.user._id });

  // Return the questions
  res.json(questions);
});

// @desc        Get a question by id
// @route       GET /api/questions/:id
// @access      Private

const getQuestionById = asyncHandler(async (req, res) => {
    // Get the user using the id in the token
    const user = await User.findById(req.user._id);

    // If the user is not found, throw an error
    if (!user) {
      res.status(401);
      throw new Error('User not found');
    }

    // Find the question by id
    const question = await Question.findById(req.params.id);

    // If the question is not found, throw an error
    if (!question) {
      res.status(404);
      throw new Error('Question not found');
    }

    // If the user is not the owner of the question, throw an error
    if (question.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to access this question');
    }

    // Return the question
    res.json(question);
});

module.exports = { createQuestions, getQuestions, getQuestionById };
