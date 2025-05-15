import { BookCard } from "./BookCard";
import styles from "./BooksContainer.module.css"

export const BooksContainer = ({
  books,
  setBookId,
  handleEditButton,
  fetchBooks,
  setTextSubmitButton,
}) => {
  
  return (
    <ul className={styles["books__container"]}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          setBookId={setBookId}
          handleEditButton={handleEditButton}
          fetchBooks={fetchBooks}
          setTextSubmitButton={setTextSubmitButton}
        />
      ))}
    </ul>
  );
};
