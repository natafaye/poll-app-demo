import { configureStore } from '@reduxjs/toolkit';
import { pollReducer } from './pollSlice';
import { responseReducer } from './responseSlice';

export const store = configureStore({
  reducer: {
    responses: responseReducer,
    polls: pollReducer
  },
});
