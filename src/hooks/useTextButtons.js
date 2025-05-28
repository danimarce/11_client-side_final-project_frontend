import { useState } from "react";

export const useTextButton = (initBook, updateFormTitle) => {
  const INITIAL_TEXT_BUTTON = "Add New Book";
  const [textButton, setTextButton] = useState(INITIAL_TEXT_BUTTON);

  const handleTextButton = () => {
    setTextButton((prevText) => {
      if (prevText === "Cancel") {
        initBook();
        updateFormTitle("Add New Book");

        return "Add New Book";
      }

      return "Cancel";
    });
  };

  const handleEditButton = () => {
    if (textButton === "Add New Book") {
      setTextButton("Cancel");
      updateFormTitle("Edit Book");
    }
  };

  return {
    textButton,
    handleEditButton,
    handleTextButton,
    setTextButton,
  };
};
