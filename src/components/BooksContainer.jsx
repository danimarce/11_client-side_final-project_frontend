import { BookCard } from "./BookCard";
import styles from "./BooksContainer.module.css"

export const BooksContainer = ({
  books,
  updateBook,
  handleEditButton,
  fetchBooks,
  setTextSubmitButton,
  isLoading,
  updateLoading,
}) => {
  if (isLoading) {
    return (
      <div className={styles["books__loading"]}>
        <p>Loading books...</p>
      </div>
    );
  }

  return (
    <ul className={styles["books__container"]}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          updateBook={updateBook}
          handleEditButton={handleEditButton}
          fetchBooks={fetchBooks}
          setTextSubmitButton={setTextSubmitButton}
          updateLoading={updateLoading}
        />
      ))}
    </ul>
  );
};
