import { useState } from 'react';
import './App.css';
import { BookList } from './components/BookList';
import { Book } from './domain/books';

function App() {
  const [books, setBooks] = useState<Book[] | null>(null);
  return <div className="App">{books ? <BookList books={books} /> : <span>Loading...</span>}</div>;
}

export default App;
