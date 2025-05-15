import { useState } from "react";

export const useTextSubmitButton = (bookId) => {
  const INTITIAL_TEXT_BUTTON = bookId ? "Update Book" : "Add Book";

  const [textSubmitButton, setTextSubmitButton] =
    useState(INTITIAL_TEXT_BUTTON);

  return {
    textSubmitButton,
    setTextSubmitButton,
  };
};
