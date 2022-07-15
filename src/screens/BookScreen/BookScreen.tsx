import { useHistory } from 'react-router-dom';
import { useBooks } from '../../domain/books';
import { noop } from '../../util/noop';
import { BookList } from './BookList';
import { OnBookSelected } from './BookList/OnBookSelected';

export interface BookScreenProps {
  onBookSelected?: OnBookSelected;
}

export const BookScreen: React.FC<BookScreenProps> = ({ onBookSelected = noop }) => {
  const { books, reload } = useBooks('http://localhost:4730');

  return (
    <div>
      <h2>Books</h2>
      <div>
        <button onClick={() => reload('http://localhost:4730')}>Reload</button>
        <div className="App">
          {books ? (
            <BookList books={books} onBookSelected={onBookSelected} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
};
