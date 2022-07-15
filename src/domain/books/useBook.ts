import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBookResult {
  book: Book | null;
  reload: (baseUrl: string, isbn: string) => void;
}

export const useBook = (baseUrl: string, isbn: string): UseBookResult => {
  const [book, setBook] = useState<Book | null>(null);

  const reload = async (baseUrl: string, isbn: string) => {
    const response = await fetch(`${baseUrl}/books/${isbn}`);
    const _book = await response.json();
    setBook(_book);
  };

  useEffect(() => {
    reload(baseUrl, isbn);
  }, [baseUrl, isbn]);

  return {
    book,
    reload,
  };
};
