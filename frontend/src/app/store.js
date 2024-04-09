import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
import resumeReducer from "../features/resumes/resumeSlice";
import questionReducer from "../features/questions/questionSlice";
import scratchResumeReducer from "../features/scratchResumes/scratchResumeSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		post: postReducer,
		resume: resumeReducer,
		question: questionReducer,
		scratchResume: scratchResumeReducer,
	},
});
