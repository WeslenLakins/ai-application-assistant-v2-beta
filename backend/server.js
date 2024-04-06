const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const colors = require('colors');
const fetch = require('node-fetch');
const cors = require('cors');
const FormData = require('form-data');

// Connect to the database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running...' });
});

// // Add a new route for Leap AI API requests
// app.post('/api/leap-ai', async (req, res) => {
//   const { workflow_id, input } = req.body; // Extract the necessary data from the request body

//   try {
//     const response = await fetch("https://api.workflows.tryleap.ai/v1/runs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Api-Key": process.env.LEAPAI_API_KEY, // Use the "X-Api-Key" header for your API key
//       },
//       body: JSON.stringify({ workflow_id, input }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to call Leap AI API");
//     }

//     res.json(data); // Send the response back to the frontend
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add a new GET route to fetch a specific workflow run details
// app.get('/api/leap-ai/runs/:workflow_run_id', async (req, res) => {
//   const { workflow_run_id } = req.params; // Extract the workflow_run_id from the URL parameter

//   try {
//     const response = await fetch(`https://api.workflows.tryleap.ai/v1/runs/${workflow_run_id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Api-Key": process.env.LEAPAI_API_KEY, // Make sure to store your API key in an environment variable
//       },
//     });

//     if (!response.ok) {
//       // If the response from the Leap AI API is not OK, throw an error
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to fetch workflow run details");
//     }

//     const data = await response.json(); // Parse the JSON response from the Leap AI API
//     res.json(data); // Send the data back to the frontend
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add a new route to make requests to hunter.io API
// app.post('/api/domain-search', async (req, res) => {
//   const { domain, departments } = req.body; // Extract domain and departments from the request body

//   const API_URL = `https://api.hunter.io/v2/domain-search?domain=${domain}&required_field=full_name&limit=100&type=personal${
//     departments ? `&department=${departments}` : ''
//   }&api_key=${process.env.HUNTER_API_KEY}`; // Use your Hunter.io API key from environment variables

//   try {
//     const hunterResponse = await fetch(API_URL);
//     const hunterData = await hunterResponse.json();

//     if (!hunterResponse.ok) {
//       throw new Error('Failed to fetch data from Hunter.io');
//     }

//     res.json(hunterData.data); // Respond with the data from Hunter.io
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });



app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/resumes', require('./routes/resumeRoutes'));
app.use('/api/leap-ai', require('./routes/leapAiRoutes'));
app.use('/api/domain-search', require('./routes/domainSearchRoutes'));
app.use('/api/questions', require('./routes/questionRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
