import { useEffect, useState } from "react";
import styles from "./FormContainer.module.css";

const BASE_URL = import.meta.env.VITE_API_URL;

export const FormContainer = ({
  bookId,
  handleTextButton,
  fetchBooks,
  textSubmitButton,
  setTextSubmitButton,
}) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
    status: "pending",
  });

  useEffect(() => {
    if (bookId) {
      globalThis
        .fetch(`${BASE_URL}/books/${bookId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBook(data);
        });
    }
  }, [bookId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTextSubmitButton("Saving...");

    const formData = new FormData(event.target);

    const formId = formData.get("id");
    const formTitle = book.title;
    const formAuthor = book.author;
    const formYear = book.year;
    const formStatus = book.status;

    const newBook = {
      title: formTitle,
      author: formAuthor,
      year: formYear,
      status: formStatus,
    };

    const urlEndpoint = formId
      ? `${BASE_URL}/books/${formId}`
      : `${BASE_URL}/books`;

    const usedMethod = formId ? "PUT" : "POST";

    const alertText = formId
      ? "Book updated succesfully!"
      : "Book added succesfully";

    globalThis
      .fetch(urlEndpoint, {
        method: usedMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setTextSubmitButton("Add book");
        handleTextButton();
        fetchBooks();
        alert(alertText);
      });

    event.target.reset();
  };

  return (
    <form className={styles["form__container"]} onSubmit={handleSubmit}>
      <h3 className={styles["form__title"]}>Add New Book</h3>
      <label className={styles["form__label"]} htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          className={styles["form__input"]}
          value={book.title ?? ""}
          onChange={(event) =>
            setBook((prevBook) => ({
              ...prevBook,
              title: event.target.value,
            }))
          }
          required
        />
      </label>
      <label className={styles["form__label"]} htmlFor="author">
        Author
        <input
          type="text"
          name="author"
          id="author"
          className={styles["form__input"]}
          value={book.author ?? ""}
          onChange={(event) =>
            setBook((prevBook) => ({
              ...prevBook,
              author: event.target.value,
            }))
          }
          required
        />
      </label>
      <label className={styles["form__label"]} htmlFor="publicationYear">
        Publication Year
        <input
          type="text"
          name="publicationYear"
          id="publicationYear"
          className={styles["form__input"]}
          value={book.year ?? ""}
          onChange={(event) =>
            setBook((prevBook) => ({
              ...prevBook,
              year: event.target.value,
            }))
          }
          required
        />
      </label>
      <label className={styles["form__label"]} htmlFor="readingStatus">
        Reading Status
        <select
          name="readingStatus"
          id="readingStatus"
          value={book.status ?? ""}
          className={styles["form__input"]}
          onChange={(event) =>
            setBook((prevBook) => ({
              ...prevBook,
              status: event.target.value,
            }))
          }
          required
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="read">Read</option>
        </select>
      </label>
      <input type="hidden" name="id" defaultValue={book.id} />
      <input className={styles["form__submit-button"]} type="submit" value={textSubmitButton} />
    </form>
  );
};
