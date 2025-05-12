const BASE_URL = import.meta.env.VITE_API_URL;

export const BookCard = ({ book, setBookId, handleEditButton }) => {
  const { id, title, author, year, status } = book;

  const handleBookEdit = (id) => {
    handleEditButton();
    setBookId(id);
  };

  const handleDeleteButton = (id) => {
    const deleteBook = confirm("Are you sure you want to delete this book?");

    if (!deleteBook) return;

    globalThis
      .fetch(`${BASE_URL}/books/${id}`, {
        method: "DELETE",
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <li>
      <section>
        <header>
          <h3>{title}</h3>
          <span>{year}</span>
        </header>
        <p>{author}</p>
      </section>
      <section>
        <span>{status}</span>
      </section>
      <section>
        <button onClick={() => handleBookEdit(id)}>Edit</button>
        <button onClick={() => handleDeleteButton(id)}>Delete</button>
      </section>
    </li>
  );
};
