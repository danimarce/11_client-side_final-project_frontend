import { BooksContainer } from "./BooksContainer";
import { HeadingTitle } from "./HeadingTitle";
import { FormButton } from "./FormButton";
import { FormContainer } from "./FormContainer";
import { PageHeader } from "./PageHeader.jsx";
import { useTextButton, useTextSubmitButton } from "../hooks/useTextButtons.js";
import { useBookId, useBooks, useFetchBooks } from "../hooks/useBooks.js";
import { useLoading } from "../hooks/useLoading.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export const App = () => {
  const { books, setBooks } = useBooks();
  const { bookId, setBookId } = useBookId();
  const { textButton, handleEditButton, handleTextButton } =
    useTextButton(setBookId);
  const { textSubmitButton, setTextSubmitButton } = useTextSubmitButton(bookId);
  const { isLoading, setIsLoading } = useLoading(true);

  const fetchBooks = () => {
    const endpointUrl = `${BASE_URL}/books`;

    globalThis
      .fetch(endpointUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  };

  useFetchBooks(fetchBooks, setIsLoading);

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
          setIsLoading={setIsLoading}
        />
      )}
      <BooksContainer
        books={books}
        setBookId={setBookId}
        handleEditButton={handleEditButton}
        fetchBooks={fetchBooks}
        setTextSubmitButton={setTextSubmitButton}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
};
