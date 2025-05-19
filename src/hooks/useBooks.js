import { useEffect, useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  return {
    books,
    setBooks,
  };
};

export const useBookId = () => {
  const [bookId, setBookId] = useState(null);

  return {
    bookId,
    setBookId,
  };
}

export const useFetchBooks = (fetchBooks) => {
  useEffect(() => {
      fetchBooks();
    }, []);
}
