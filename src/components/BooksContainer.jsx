import { BookCard } from "./BookCard";

export const BooksContainer = ({
  books,
  setBookId,
  handleEditButton,
  fetchBooks,
  setTextSubmitButton,
}) => {
  
  return (
    <ul>
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
