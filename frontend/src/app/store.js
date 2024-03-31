import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/posts/postSlice';
import resumeReducer from '../features/resumes/resumeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    resume: resumeReducer,
  },
});
