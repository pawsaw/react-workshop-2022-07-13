import { useEffect, useState } from 'react';
import './App.css';
import { BookList } from './components/BookList';
import { Book } from './domain/books';

function App() {
  const baseUrl = 'http://localhost:4730';
  const [books, setBooks] = useState<Book[] | null>(null);
  useEffect(() => {
    const fetchBooks = async (baseUrl: string) => {
      const response = await fetch(`${baseUrl}/books`);
      const _books = await response.json();
      setBooks(_books);
    };

    fetchBooks(baseUrl);
  }, [baseUrl]);
  // Load books here, using useEffect and fetch() api ...
  return <div className="App">{books ? <BookList books={books} /> : <span>Loading...</span>}</div>;
}

export default App;
