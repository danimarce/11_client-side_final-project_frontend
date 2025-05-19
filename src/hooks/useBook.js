import { useState } from "react";

export const useBookId = () => {
  const [bookId, setBookId] = useState({});

  const updateBook = (updatedBook) => {
    setBookId(updatedBook)
  }

  return {
    bookId,
    setBookId,
    updateBook
  };
};
