import { BooksContainer } from "./BooksContainer";
import { HeadingTitle } from "./HeadingTitle";
import { FormButton } from "./FormButton";
import { FormContainer } from "./FormContainer";
import { PageHeader } from "./PageHeader.jsx";
import { useTextButton } from "../hooks/useTextButtons.js";
import { useTextSubmitButton } from "../hooks/useTextSubmitButton.js";
import { useBooks } from "../hooks/useBooks.js";
import { useLoading } from "../hooks/useLoading.js";
import { useFetchBooks } from "../hooks/useFetchBooks.js";
import { useBook } from "../hooks/useBook.js";

export const App = () => {
  const { books, updateBooks } = useBooks();
  const { book, updateBook, initBook, updateBookField } = useBook();
  const { textButton, handleEditButton, handleTextButton } =
    useTextButton(initBook);
  const { textSubmitButton, updateTextSubmitButton } = useTextSubmitButton(
    book["id"]
  );
  const { isLoading, updateLoading } = useLoading(true);
  const { fetchBooks } = useFetchBooks({ updateBooks, updateLoading });

  return (
    <>
      <PageHeader>
        <HeadingTitle title="My Book Collection" />
        <FormButton textButton={textButton} handleClick={handleTextButton} />
      </PageHeader>
      {(textButton === "Cancel" || book["id"] !== 0) && (
        <FormContainer
          book={book}
          updateBook={updateBook}
          updateBookField={updateBookField}
          handleTextButton={handleTextButton}
          fetchBooks={fetchBooks}
          textSubmitButton={textSubmitButton}
          updateTextSubmitButton={updateTextSubmitButton}
          updateLoading={updateLoading}
        />
      )}
      <BooksContainer
        books={books}
        updateBook={updateBook}
        handleEditButton={handleEditButton}
        fetchBooks={fetchBooks}
        isLoading={isLoading}
        updateLoading={updateLoading}
      />
    </>
  );
};
