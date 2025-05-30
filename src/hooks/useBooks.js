import { useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  const updateBooks = (updatedBooks) => {
    setBooks(updatedBooks);
  };

  return {
    books,
    setBooks,
    updateBooks,
  };
};
