import { BookCard } from "./BookCard";

export const BooksContainer = ({ books, setBookId, handleEditButton }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          setBookId={setBookId}
          handleEditButton={handleEditButton}
        />
      ))}
    </ul>
  );
};
