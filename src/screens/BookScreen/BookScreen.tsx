import { useBooks } from '../../domain/books';
import { BookList } from './BookList';

export const BookScreen: React.FC = () => {
  const { books, reload } = useBooks('http://localhost:4730');
  return (
    <div>
      <h2>Books</h2>
      <div>
        <button onClick={() => reload('http://localhost:4730')}>Reload</button>
        <div className="App">
          {books ? (
            <BookList books={books} onBookSelected={(book) => alert(book.price)} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
};
