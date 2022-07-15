import { useParams } from 'react-router-dom';
import { useBook } from '../../domain/books';

export interface BookDetailsScreenParams {
  isbn: string;
}

export const BookDetailsScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailsScreenParams>();
  const { book } = useBook('http://localhost:4730', isbn);

  return (
    <div>
      <h2>Book Details for {isbn}</h2>
      {book ? <div>Title: {book.title}</div> : <span>Loading...</span>}
    </div>
  );
};
