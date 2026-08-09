/**
 * Header Component
 * Navigation bar with links to Home, Browse Books, and Add Book pages
 * Includes logo and responsive design
 * Sticky positioning keeps it visible while scrolling
 */


import { Link } from 'react-router-dom';
import '../styles/Header.css';

/**
 * Header Component
 * Navigation bar with links to main pages
 */
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          <h1>Online Library</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/books" className="nav-link">
            Browse Books
          </Link>
          <Link to="/add-book" className="nav-link add-book-btn">
            + Add Book
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;