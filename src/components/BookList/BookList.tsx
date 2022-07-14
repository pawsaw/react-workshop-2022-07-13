import { Book } from '../../domain/books';
import { useCounter } from '../../util/counter';
import { noop } from '../../util/noop';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {
  const { count } = useCounter();

  return (
    <div>
      <div>
        {books.map((book) => (
          <BookListItem key={book.title} book={book} onBookSelected={onBookSelected} />
        ))}
      </div>
      Counter: {count}
    </div>
  );
};
