/**
 * Home Component
 * Landing page with welcome message, book categories, and popular books display
 * Shows first 6 books as popular recommendations
 * Includes category grid for easy navigation
 */

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from '../data/booksData';
import '../styles/Home.css';

/**
 * Home Component
 * Landing page with welcome message, categories, and popular books
 */
function Home() {
  // Get books from Redux store
  const books = useSelector((state) => state.books.books);
  
  // Show first 6 books as popular
  const popularBooks = books.slice(0, 6);

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">Welcome to Our Online Library</h2>
          <p className="welcome-subtitle">
            Discover thousands of books across multiple categories. Find your next favorite read today!
          </p>
          <Link to="/books" className="cta-button">
            Start Browsing
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h3 className="section-title">Browse by Category</h3>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category}
              to={category === 'All' ? '/books' : `/books/${category}`}
              className="category-card"
            >
              <div className="category-icon">
                {category === 'All' && '📚'}
                {category === 'Fiction' && '📖'}
                {category === 'Non-Fiction' && '📗'}
                {category === 'Sci-Fi' && '🚀'}
                {category === 'Mystery' && '🔍'}
              </div>
              <h4>{category}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <h3 className="section-title">Popular Books</h3>
        <div className="books-grid">
          {popularBooks.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="book-card"
            >
              <div className="book-image">{book.image}</div>
              <div className="book-info">
                <h4>{book.title}</h4>
                <p className="book-author">{book.author}</p>
                <div className="book-rating">
                  ⭐ {book.rating}/5
                </div>
                <p className="book-price">${book.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;