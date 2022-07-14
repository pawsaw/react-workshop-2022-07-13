import './App.css';
import { BookList } from './components/BookList';
import { useBooks } from './domain/books';

function App() {
  const { books, reload } = useBooks('http://localhost:4730');

  // Load books here, using useEffect and fetch() api ...
  return (
    <div>
      <button onClick={() => reload('http://localhost:4730')}>Reload</button>
      <div className="App">{books ? <BookList books={books} /> : <span>Loading...</span>}</div>
    </div>
  );
}

export default App;
