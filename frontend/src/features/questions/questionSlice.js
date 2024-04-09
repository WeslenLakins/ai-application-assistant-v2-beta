import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import questionService from "./questionService";

const initialState = {
	questions: [],
	question: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Create a new question
export const createQuestion = createAsyncThunk(
	"questions/createQuestion",
	async (questionData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await questionService.createQuestion(questionData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue({ message });
		}
	}
);

// Get user questions
export const getQuestions = createAsyncThunk(
	"questions/getQuestions",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await questionService.getQuestions(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue({ message });
		}
	}
);

// Get user question by id
export const getQuestionById = createAsyncThunk(
	"questions/getQuestionById",
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await questionService.getQuestionById(id, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue({ message });
		}
	}
);

export const questionSlice = createSlice({
	name: "question",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createQuestion.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createQuestion.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createQuestion.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getQuestions.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getQuestions.fulfilled, (state, action) => {
				state.isLoading = false;
				state.questions = action.payload;
				state.isSuccess = true;
			})
			.addCase(getQuestions.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getQuestionById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getQuestionById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.question = action.payload;
				state.isSuccess = true;
			})
			.addCase(getQuestionById.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = questionSlice.actions;
export default questionSlice.reducer;
