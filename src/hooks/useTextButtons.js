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

export const useTextButton = (setBookId) => {
  const [textButton, setTextButton] = useState("Add New Book");

  const handleTextButton = () => {
    setTextButton((prevText) => {
      if (prevText === "Cancel") {
        setBookId(null);

        return "Add New Book";
      }

      return "Cancel";
    });
  };

  const handleEditButton = () => {
    if (textButton === "Add New Book") {
      setTextButton("Cancel");
    }
  };

  return {
    textButton,
    handleEditButton,
    handleTextButton,
    setTextButton,
  };
}
