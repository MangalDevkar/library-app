import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';
import './styles/App.css';

/**
 * App Component
 * Main application with React Router setup
 * Provides Redux store to all components
 */
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="main-content">
                  <Home />
                </main>
              </>
            }
          />

          {/* Browse Books - All or by category */}
          <Route
            path="/books"
            element={
              <>
                <Header />
                <main className="main-content">
                  <BrowseBooks />
                </main>
              </>
            }
          />
          <Route
            path="/books/:category"
            element={
              <>
                <Header />
                <main className="main-content">
                  <BrowseBooks />
                </main>
              </>
            }
          />

          {/* Book Details - Dynamic route */}
          <Route
            path="/book/:id"
            element={
              <>
                <Header />
                <main className="main-content">
                  <BookDetails />
                </main>
              </>
            }
          />

          {/* Add Book Page */}
          <Route
            path="/add-book"
            element={
              <>
                <Header />
                <main className="main-content">
                  <AddBook />
                </main>
              </>
            }
          />

          {/* 404 Page - No Header */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;