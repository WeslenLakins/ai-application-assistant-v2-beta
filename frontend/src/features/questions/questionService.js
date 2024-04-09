import axios from "axios";

const API_URL = "/api/questions/";

// Create a new question
const createQuestion = async (questionData, token) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(API_URL, questionData, config);
	return response.data;
};

// Get user questions
const getQuestions = async (token) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);
	return response.data;
};

// Get a question by id
const getQuestionById = async (id, token) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(`${API_URL}${id}`, config);
	return response.data;
};

const questionService = {
	createQuestion,
	getQuestions,
	getQuestionById,
};

export default questionService;
