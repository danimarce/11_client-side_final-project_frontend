import { useState } from "react";

export const useTextButton = (initBook) => {
  const [textButton, setTextButton] = useState("Add New Book");

  const handleTextButton = () => {
    setTextButton((prevText) => {
      if (prevText === "Cancel") {
        initBook();

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
};
