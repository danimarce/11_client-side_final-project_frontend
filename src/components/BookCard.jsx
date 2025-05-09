export const BookCard = ({ book }) => {
  return (
    <li>
      <section>
        <header>
          <h3>{book.title}</h3>
          <span>{book.year}</span>
        </header>
        <p>{book.author}</p>
      </section>
      <section>
        <span>{book.status}</span>
      </section>
      <section>
        <button>Edit</button>
        <button>Delete</button>
      </section>
    </li>
  );
};
