import { BookCard } from "./BookCard"

export const BooksContainer = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  )
}
