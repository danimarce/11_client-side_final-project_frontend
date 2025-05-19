import { BooksContainer } from "./BooksContainer";
import { HeadingTitle } from "./HeadingTitle";
import { FormButton } from "./FormButton";
import { FormContainer } from "./FormContainer";
import { PageHeader } from "./PageHeader.jsx";
import { useTextButton, useTextSubmitButton } from "../hooks/useTextButtons.js";
import { useBooks } from "../hooks/useBooks.js";
import { useLoading } from "../hooks/useLoading.js";
import { useFetchBooks } from "../hooks/useFetchBooks.js";
import { useBookId } from "../hooks/useBook.js";

export const App = () => {
  const { books, updateBooks } = useBooks();
  const { bookId, updateBook } = useBookId();
  const { textButton, handleEditButton, handleTextButton } =
    useTextButton(updateBook);
  const { textSubmitButton, setTextSubmitButton } = useTextSubmitButton(bookId);
  const { isLoading, setIsLoading } = useLoading(true);
  const { fetchBooks } = useFetchBooks({ updateBooks, setIsLoading });

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
        setBookId={updateBook}
        handleEditButton={handleEditButton}
        fetchBooks={fetchBooks}
        setTextSubmitButton={setTextSubmitButton}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
};
