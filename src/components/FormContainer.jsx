import { useEffect, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h3>Add New Book</h3>
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
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
      <label htmlFor="author">
        Author
        <input
          type="text"
          name="author"
          id="author"
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
      <label htmlFor="publicationYear">
        Publication Year
        <input
          type="text"
          name="publicationYear"
          id="publicationYear"
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
      <select
        name="readingStatus"
        id="readingStatus"
        value={book.status ?? ""}
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
      <input type="hidden" name="id" defaultValue={book.id} />
      <input type="submit" value={textSubmitButton} />
    </form>
  );
};
