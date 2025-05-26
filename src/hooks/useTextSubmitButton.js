import { useState, useEffect } from "react";

export const useTextSubmitButton = (bookId) => {
  const getInitialText = (id) => {
    return id === 0 ? "Add book" : "Update book";
  };

  const [textSubmitButton, setTextSubmitButton] = useState(getInitialText(bookId));

  useEffect(() => {
    setTextSubmitButton(getInitialText(bookId));
  }, [bookId]);

  return {
    textSubmitButton,
    setTextSubmitButton,
  };
};
