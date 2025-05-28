import styles from "./FormContainer.module.css";

const BASE_URL = import.meta.env.VITE_API_URL;

export const FormContainer = ({
  book,
  updateBookField,
  handleTextButton,
  fetchBooks,
  textFormTitle,
  textSubmitButton,
  updateTextSubmitButton,
  updateLoading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    updateTextSubmitButton("Saving...");
    updateLoading(true);

    const formId = book.id;
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

    const urlEndpoint =
      formId !== 0 ? `${BASE_URL}/books/${formId}` : `${BASE_URL}/books`;

    const usedMethod = formId !== 0 ? "PUT" : "POST";

    const alertText =
      formId !== 0 ? "Book updated succesfully!" : "Book added succesfully";

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
        updateTextSubmitButton("Add book");
        handleTextButton();
        fetchBooks();
        alert(alertText);
      });

    event.target.reset();
  };

  return (
    <form className={styles["form__container"]} onSubmit={handleSubmit}>
      <h3 className={styles["form__title"]}>{textFormTitle}</h3>
      <label className={styles["form__label"]} htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          className={styles["form__input"]}
          placeholder="Enter book title"
          value={book.title}
          onChange={(event) => updateBookField("title", event.target.value)}
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
          placeholder="Enter author name"
          value={book.author}
          onChange={(event) => updateBookField("author", event.target.value)}
          required
        />
      </label>
      <div className={styles["form__year-status-wrapper"]}>
        <label className={styles["form__label"]} htmlFor="publicationYear">
          Publication Year
          <input
            type="text"
            name="publicationYear"
            id="publicationYear"
            className={styles["form__input"]}
            value={book.year}
            onChange={(event) => updateBookField("year", event.target.value)}
            required
          />
        </label>
        <label className={styles["form__label"]} htmlFor="readingStatus">
          Reading Status
          <select
            name="readingStatus"
            id="readingStatus"
            value={book.status}
            className={styles["form__input"]}
            onChange={(event) =>
              updateBookField("status", event.target.value)
            }
            required
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="read">Read</option>
          </select>
        </label>
      </div>
      <input
        className={styles["form__submit-button"]}
        type="submit"
        value={textSubmitButton}
      />
    </form>
  );
};
