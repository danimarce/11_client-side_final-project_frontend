import { useState } from "react";

export const useTextFormTitle = () => {
  const INITIAL_FORM_TITLE = "Add New Book";
  const [textFormTitle, setTextFormTitle] = useState(INITIAL_FORM_TITLE);

  return {
    textFormTitle,
    updateFormTitle: setTextFormTitle,
  };
};
