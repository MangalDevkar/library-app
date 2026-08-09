/**
 * Browse Books Component
 * Displays all books with category filtering and search functionality
 * Supports dynamic routing by category parameter
 * Implements Redux-based filtering and search
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  filterByCategory,
  searchBooks,
  resetFilters,
} from '../redux/bookSlice';
import { categories } from '../data/booksData';
import '../styles/BrowseBooks.css';

/**
 * BrowseBooks Component
 * Display books with filtering by category and search functionality
 */
function BrowseBooks() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const filteredBooks = useSelector((state) => state.books.filteredBooks);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by category when component mounts or category changes
  useEffect(() => {
    if (category) {
      dispatch(filterByCategory(category));
    } else {
      dispatch(resetFilters());
    }
  }, [category, dispatch]);

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim()) {
      dispatch(searchBooks(term));
    } else {
      if (category) {
        dispatch(filterByCategory(category));
      } else {
        dispatch(resetFilters());
      }
    }
  };

  return (
    <div className="browse-books">
      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h3>Filter by Category:</h3>
        <div className="category-buttons">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={cat === 'All' ? '/books' : `/books/${cat}`}
              className={`filter-btn ${
                (category === cat || (cat === 'All' && !category)) &&
                'active'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Books List */}
      <div className="books-list-section">
        <h2>
          {category ? `Books in ${category}` : 'All Books'} (
          {filteredBooks.length})
        </h2>

        {filteredBooks.length > 0 ? (
          <div className="books-list">
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-list-item">
                <div className="book-image-large">{book.image}</div>
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p className="author">By {book.author}</p>
                  <p className="description">{book.description}</p>
                  <div className="book-meta">
                    <span className="category">{book.category}</span>
                    <span className="rating">⭐ {book.rating}/5</span>
                    <span className="price">${book.price}</span>
                  </div>
                  <Link
                    to={`/book/${book.id}`}
                    className="view-details-btn"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-books">
            <p>No books found. Try searching with different terms.</p>
            <Link to="/books" className="reset-btn">
              View All Books
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;