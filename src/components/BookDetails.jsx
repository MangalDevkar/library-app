import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/BookDetails.css';

/**
 * BookDetails Component
 * Display full information about a selected book
 * Uses dynamic routing with book ID
 */
function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  // Find book by ID
  const book = books.find((b) => b.id === parseInt(id));

  // If book not found
  if (!book) {
    return (
      <div className="book-details">
        <div className="book-not-found">
          <h2>Book Not Found</h2>
          <p>The book you're looking for doesn't exist.</p>
          <Link to="/books" className="back-btn">
            Back to Browse Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="book-details">
      <Link to="/books" className="back-link">
        ← Back to Browse Books
      </Link>

      <div className="book-details-container">
        {/* Book Image/Icon */}
        <div className="book-details-image">
          <div className="large-book-image">{book.image}</div>
        </div>

        {/* Book Information */}
        <div className="book-details-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">By {book.author}</p>

          {/* Rating and Category */}
          <div className="book-meta-info">
            <span className="rating-badge">
              ⭐ {book.rating}/5 Rating
            </span>
            <span className="category-badge">{book.category}</span>
            <span className="price-badge">${book.price}</span>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>

          {/* Book Details Grid */}
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Author:</span>
              <span className="detail-value">{book.author}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Category:</span>
              <span className="detail-value">{book.category}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Rating:</span>
              <span className="detail-value">{book.rating}/5 ⭐</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Price:</span>
              <span className="detail-value">${book.price}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="wishlist-btn">♥ Add to Wishlist</button>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="back-button-section">
        <Link to="/books" className="back-btn-large">
          ← Back to Browse Books
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;