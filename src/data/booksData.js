// Dummy books data with 12 books across 4 categories
export const initialBooks = [
  // Fiction Books
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Fiction',
    rating: 4.8,
    description:
      'A classic American novel about wealth, love, and the American Dream set in the Jazz Age.',
    image: '📖',
    price: 12.99,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    rating: 4.9,
    description:
      'A gripping tale of racial injustice and childhood innocence in the American South.',
    image: '📚',
    price: 14.99,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    rating: 4.7,
    description:
      'A dystopian novel depicting a totalitarian future and the dangers of authoritarianism.',
    image: '📕',
    price: 13.99,
  },

  // Non-Fiction Books
  {
    id: 4,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    rating: 4.6,
    description:
      'A brief history of humankind exploring how homo sapiens came to dominate the world.',
    image: '📗',
    price: 18.99,
  },
  {
    id: 5,
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Non-Fiction',
    rating: 4.7,
    description:
      'A memoir about a woman raised by survivalists who educates herself and pursues a degree.',
    image: '📙',
    price: 17.99,
  },
  {
    id: 6,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Non-Fiction',
    rating: 4.5,
    description:
      'An exploration of the two systems of thought and how we make decisions.',
    image: '📘',
    price: 16.99,
  },

  // Science Fiction Books
  {
    id: 7,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    rating: 4.8,
    description:
      'An epic space opera about politics, religion, and ecology on a desert planet.',
    image: '🚀',
    price: 15.99,
  },
  {
    id: 8,
    title: 'Foundation',
    author: 'Isaac Asimov',
    category: 'Sci-Fi',
    rating: 4.6,
    description:
      'A series about the fall and rise of galactic civilization using psychohistory.',
    image: '🌌',
    price: 14.99,
  },
  {
    id: 9,
    title: 'The Martian',
    author: 'Andy Weir',
    category: 'Sci-Fi',
    rating: 4.7,
    description:
      'An astronaut stranded on Mars must use ingenuity and science to survive and return home.',
    image: '🔴',
    price: 13.99,
  },

  // Mystery Books
  {
    id: 10,
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    category: 'Mystery',
    rating: 4.5,
    description:
      'A gripping mystery about a journalist and a hacker investigating a decades-old disappearance.',
    image: '🔍',
    price: 16.99,
  },
  {
    id: 11,
    title: 'Sherlock Holmes: A Scandal in Bohemia',
    author: 'Arthur Conan Doyle',
    category: 'Mystery',
    rating: 4.6,
    description:
      'A classic Sherlock Holmes mystery where his wit is matched by an intelligent woman.',
    image: '🎩',
    price: 9.99,
  },
  {
    id: 12,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    category: 'Mystery',
    rating: 4.4,
    description:
      'A fast-paced thriller involving art, history, and a quest across Europe.',
    image: '🎨',
    price: 15.99,
  },
];

// Book categories
export const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];