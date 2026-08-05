import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';

// Configure Redux store with book reducer
export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;