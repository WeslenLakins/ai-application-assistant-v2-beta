const asyncHandler = require('express-async-handler');
const OpenAI = require('openai');
const Resume = require('../models/resumeModel');
const User = require('../models/userModel');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

// @desc    Create a new resume
// @route   POST /api/resumes
// @access  Private

const createResume = asyncHandler(async (req, res) => {
  const { jobTitle, company, location, jobDescription, currentResume } =
    req.body;

  // Validation
  if (!jobTitle || !company || !location || !jobDescription || !currentResume) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  // Get the user using the id in the token
  const user = await User.findById(req.user._id);

  // If the user is not found, throw an error
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Generate the prompt for the newResume to send to OpenAI
  const prompt = `You will be given a Job Title, Company Name, Location, and a Job Description of a job the Job Applicant (the “Applicant”) is applying for along with a copy of the Applicant's current Resume. You will write a new resume for the Applicant that aligns the past education and experiences listed in their current resume with the requirements and qualifications listed in the Job Description of the position they are applying for. Rather than simply outlining the applicant's past experiences, you should quantify their achievements and contributions in a way that makes sense given the previous job titles the Applicant has held. For example: 

 

  1. Conduct market research and gather feedback from 15,000+ users to identify customer needs and opportunities for differentiation.
  
  2. Mentor and manage a team of 8 product specialists, fostering a culture of innovation and earning two team members the “Employee of the Year” award under my leadership.
  
  3. Use agile methodologies to manage product backlogs, prioritize features, and ensure timely delivery of high-quality releases, resulting in an average release cycle time reduction of 25% 
  
  4. Collaborated closely with UX/UI designers to create intuitive and engaging user interfaces, leading to an 18% improvement in user satisfaction
  
  5. Leveraged data analysis and user feedback to drive improvements, optimizing product performance and resulting in a 23% decrease in customer support requests 
  
  6. Collaborated with non-profits to launch community fitness programs, attracting over 7,000 participants in the first 6-months, and enhancing brand goodwill by promoting health in underserved communities. 
  
  7. Launched and managed partnerships with 3 external vendors, expanding product capabilities and contributing to a 15% increase in product reach

 

  Additionally, write the new resume in the same language used in the job description. Furthermore, format the new resume you are writing for the Applicant exactly how the Applicants current Resume is formatted. You will write the Applicants new resume in a modern style with a professional tone without being too formal, as a modern employee might do naturally. Do not include anything in your response that is not a part of the resume. The resume should be no longer than 1 page.
  
  Job title: ${jobTitle}\nCompany: ${company}\nLocation: ${location}\nJob description: ${jobDescription}\n\nCurrent resume:\n${currentResume}\n\nNew resume:`;

  // Generate the newResume using OpenAI.
  let newResume;
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });
    newResume = completion.choices[0].message.content;
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

  // Create a new resume with the user's id, jobTitle, company, location, jobDescription, currentResume, and newResume
  const resume = await Resume.create({
    user: req.user._id,
    jobTitle,
    company,
    location,
    jobDescription,
    currentResume,
    newResume,
  });

  // Return the created resume
  res.status(201).json(resume);
});

// @desc    Get all resumes
// @route   GET /api/resumes
// @access  Private

const getResumes = asyncHandler(async (req, res) => {
  // Get the user using the id in the token
  const user = await User.findById(req.user._id);

  // If the user is not found, throw an error
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Get all resumes for the user
  const resumes = await Resume.find({ user: req.user._id });

  // Return the resumes
  res.status(200).json(resumes);
});

// @desc    Get a resume by id
// @route   GET /api/resumes/:id
// @access  Private

const getResumeById = asyncHandler(async (req, res) => {
  // Get the user using the id in the token
  const user = await User.findById(req.user._id);

  // If the user is not found, throw an error
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Get the resume for the user
  const resume = await Resume.findById(req.params.id);

  // If the resume is not found, throw an error
  if (!resume) {
    res.status(404);
    throw new Error('Resume not found');
  }

  // If the user is not the owner of the resume, throw an error
  if (resume.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('You are not authorized to view this resume');
  }

  // Return the resume
  res.status(200).json(resume);
});

module.exports = { createResume, getResumes, getResumeById };
