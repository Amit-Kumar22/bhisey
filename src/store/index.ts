import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import blogsReducer from './slices/blogsSlice';
import caseStudiesReducer from './slices/caseStudiesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsReducer,
    caseStudies: caseStudiesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;