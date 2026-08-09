 /**
 * Redux Store Configuration
 * Central state management using Redux Toolkit
 * Manages global books state across the application
 */

import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';

// Configure Redux store with book reducer
export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store; 
  
  
  
  
  
  import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';

// Configure Redux store with book reducer
export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;