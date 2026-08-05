import { createSlice } from '@reduxjs/toolkit';
import { initialBooks } from '../data/booksData';

// Initial state with books from dummy data
const initialState = {
  books: initialBooks,
  filteredBooks: initialBooks,
};

// Create Redux slice for managing books
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Add new book to the list
    addBook: (state, action) => {
      const newBook = {
        id: state.books.length + 1,
        ...action.payload,
      };
      state.books.unshift(newBook);
      state.filteredBooks.unshift(newBook);
    },

    // Filter books by category
    filterByCategory: (state, action) => {
      const category = action.payload;
      if (category === 'All') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(
          (book) => book.category === category
        );
      }
    },

    // Search books by title or author
    searchBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredBooks = state.books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
      );
    },

    // Reset all filters
    resetFilters: (state) => {
      state.filteredBooks = state.books;
    },
  },
});

export const { addBook, filterByCategory, searchBooks, resetFilters } =
  bookSlice.actions;
export default bookSlice.reducer;