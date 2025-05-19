import styles from "./BookCard.module.css";

const BASE_URL = import.meta.env.VITE_API_URL;

export const BookCard = ({
  book,
  setBookId,
  handleEditButton,
  fetchBooks,
  setTextSubmitButton,
  setIsLoading,
}) => {
  const { id, title, author, year, status } = book;

  const handleBookEdit = (id) => {
    setTextSubmitButton("Update book");
    setBookId(id);
    handleEditButton();
  };

  const handleDeleteButton = (id) => {
    const deleteBook = confirm("Are you sure you want to delete this book?");

    if (!deleteBook) return;

    setIsLoading(true);

    globalThis
      .fetch(`${BASE_URL}/books/${id}`, {
        method: "DELETE",
      })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        alert("Book deleted succesfully!");
        fetchBooks();
      });
  };

  const cardStatusStyles = {
    pending: "book__card-status--pending",
    read: "book__card-status--read",
    "in progress": "book__card-status--in-progress",
  };

  return (
    <li className={styles["book__card"]}>
      <section className={styles["book__card-first-section"]}>
        <header className={styles["book__card-section-header"]}>
          <h3 className={styles["book__card-title"]}>{title}</h3>
          <span className={styles["book__card-year"]}>{year}</span>
        </header>
        <p className={styles["book__card-author"]}>{author}</p>
      </section>
      <section className={styles["book__card-section-status"]}>
        <span
          className={`${styles["book__card-status"]} ${
            styles[cardStatusStyles[status]]
          }`}
        >
          {status}
        </span>
      </section>
      <section className={styles["book__card-section-buttons"]}>
        <button
          className={styles["book__card-button"]}
          onClick={() => handleBookEdit(id)}
        >
          Edit
        </button>
        <button
          className={`${styles["book__card-button"]} ${styles["book_card-delete-button"]}`}
          onClick={() => handleDeleteButton(id)}
        >
          Delete
        </button>
      </section>
    </li>
  );
};
