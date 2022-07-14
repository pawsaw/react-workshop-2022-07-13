import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  reload: (baseUrl: string) => void;
}

export const useBooks = (baseUrl: string): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);

  const reload = async (baseUrl: string) => {
    const response = await fetch(`${baseUrl}/books`);
    const _books = await response.json();
    setBooks(_books);
  };

  useEffect(() => {
    reload(baseUrl);
  }, [baseUrl]);

  return {
    books,
    reload,
  };
};
