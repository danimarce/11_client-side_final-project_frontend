import { useEffect, useState } from "react";
import { BooksContainer } from "./BooksContainer";
import { HeadingTitle } from "./HeadingTitle";
import { FormButton } from "./FormButton";
import { FormContainer } from "./FormContainer";

import { useTextSubmitButton } from "../hooks/useTextSubmitButton.js";
import { PageHeader } from "./PageHeader.jsx";

const BASE_URL = import.meta.env.VITE_API_URL;

export const App = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState(null);
  const [textButton, setTextButton] = useState("Add New Book");
  const { textSubmitButton, setTextSubmitButton } = useTextSubmitButton(bookId);

  const fetchBooks = () => {
    const endpointUrl = `${BASE_URL}/books`;

    globalThis
      .fetch(endpointUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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

  return (
    <>
      <PageHeader>
        <HeadingTitle title="My Book Collection" />
        <FormButton textButton={textButton} handleClick={handleTextButton} />
      </PageHeader>
      {(textButton === "Cancel" || bookId) && (
        <FormContainer
          bookId={bookId}
          handleTextButton={handleTextButton}
          fetchBooks={fetchBooks}
          textSubmitButton={textSubmitButton}
          setTextSubmitButton={setTextSubmitButton}
        />
      )}
      <BooksContainer
        books={books}
        setBookId={setBookId}
        handleEditButton={handleEditButton}
        fetchBooks={fetchBooks}
        setTextSubmitButton={setTextSubmitButton}
      />
    </>
  );
};
