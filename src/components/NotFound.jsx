/**
 * NotFound Component
 * 404 Error page for undefined routes
 * Displays invalid route URL and suggests valid pages
 * Rendered without Header component
 */

import { useLocation, Link } from 'react-router-dom';
import '../styles/NotFound.css';

/**
 * NotFound Component
 * 404 Error page for undefined routes
 * Does NOT include Header component
 */
function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p className="error-message">
          Sorry! The page you're looking for doesn't exist.
        </p>
        <div className="invalid-url">
          <p className="url-label">Invalid Route:</p>
          <code className="url-display">{location.pathname}</code>
        </div>
        <p className="help-text">
          The route <strong>{location.pathname}</strong> is not a valid page in our library system.
        </p>

        {/* Action Links */}
        <div className="action-links">
          <Link to="/" className="home-link">
            Go to Home Page
          </Link>
          <Link to="/books" className="browse-link">
            Browse Books
          </Link>
          <Link to="/add-book" className="add-link">
            Add a Book
          </Link>
        </div>

        {/* Suggestions */}
        <div className="suggestions">
          <h3>Did you mean:</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Browse Books</Link></li>
            <li><Link to="/books/Fiction">Fiction Books</Link></li>
            <li><Link to="/books/Sci-Fi">Sci-Fi Books</Link></li>
            <li><Link to="/add-book">Add a Book</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotFound;