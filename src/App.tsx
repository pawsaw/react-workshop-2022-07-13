import { useState } from 'react';
import './App.css';
import { BookList } from './components/BookList';
import { Counter } from './components/Counter';
import { useBooks } from './domain/books';
import { CounterProvider } from './util/counter';

function App() {
  const { books, reload } = useBooks('http://localhost:4730');
  const [count, setCount] = useState(0);

  // Load books here, using useEffect and fetch() api ...
  return (
    <CounterProvider
      counter={{
        count,
        increment: () => setCount(count + 1),
      }}
    >
      <div>
        <button onClick={() => reload('http://localhost:4730')}>Reload</button>
        <div className="App">
          {books ? (
            <BookList books={books} onBookSelected={(book) => alert(book.price)} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
