import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';
import { categories } from '../data/booksData';
import '../styles/AddBook.css';

/**
 * AddBook Component
 * Form to add new books with Redux state management
 * Includes form validation
 */
function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    rating: 5,
    description: '',
    price: 0,
    image: '📚',
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === 'rating' || name === 'price' ? parseFloat(value) : value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Book title is required';
    }
    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required';
    }
    if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    if (formData.price < 0) {
      newErrors.price = 'Price cannot be negative';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add book via Redux
    dispatch(addBook(formData));

    // Show success
    setSubmitted(true);

    // Reset form
    setFormData({
      title: '',
      author: '',
      category: 'Fiction',
      rating: 5,
      description: '',
      price: 0,
      image: '📚',
    });

    // Redirect after 1.5 seconds
    setTimeout(() => {
      navigate('/books');
    }, 1500);
  };

  return (
    <div className="add-book">
      <div className="add-book-container">
        <h2>Add a New Book to Library</h2>
        <p className="subtitle">
          Fill out the form below to add a new book to our collection
        </p>

        {submitted && (
          <div className="success-message">
            ✅ Book added successfully! Redirecting to Browse Books...
          </div>
        )}

        <form onSubmit={handleSubmit} className="add-book-form">
          {/* Title Field */}
          <div className="form-group">
            <label htmlFor="title">Book Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          {/* Author Field */}
          <div className="form-group">
            <label htmlFor="author">Author *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Enter author name"
              className={errors.author ? 'error' : ''}
            />
            {errors.author && <span className="error-message">{errors.author}</span>}
          </div>

          {/* Category Field */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories
                .filter((cat) => cat !== 'All')
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>

          {/* Rating Field */}
          <div className="form-group">
            <label htmlFor="rating">
              Rating (0-5) - Current: {formData.rating}
            </label>
            <input
              type="range"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleInputChange}
            />
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>

          {/* Price Field */}
          <div className="form-group">
            <label htmlFor="price">Price ($) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="0.00"
              min="0"
              step="0.01"
              className={errors.price ? 'error' : ''}
            />
            {errors.price && <span className="error-message">{errors.price}</span>}
          </div>

          {/* Description Field */}
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter book description (at least 10 characters)"
              rows="5"
              className={errors.description ? 'error' : ''}
            />
            <div className="char-count">
              {formData.description.length} characters
            </div>
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          {/* Book Icon Selection */}
          <div className="form-group">
            <label>Book Icon</label>
            <div className="icon-selector">
              {['📚', '📖', '📕', '📗', '📙', '📘'].map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className={`icon-btn ${formData.image === icon ? 'selected' : ''}`}
                  onClick={() =>
                    setFormData({ ...formData, image: icon })
                  }
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Add Book to Library
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;