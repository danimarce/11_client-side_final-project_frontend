import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useBook = () => {
  const INITIAL_BOOK = {
    id: 0,
    title: "",
    author: "",
    year: 2025,
    status: "pending",
  };

  const [book, setBook] = useState(INITIAL_BOOK);

  const initBook = () => {
    setBook(INITIAL_BOOK);
  };

  const updateBook = (bookId) => {
    globalThis
      .fetch(`${BASE_URL}/books/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((bookData) => {
        setBook(bookData);
      });
  };

  const updateBookField = (field, value) => {
    setBook((prevBook) => ({
      ...prevBook,
      [field]: value,
    }));
  }

  return {
    book,
    updateBook,
    initBook,
    updateBookField,
  };
};
