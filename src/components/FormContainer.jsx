import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const FormContainer = ({ id }) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    if (id) {
      globalThis
        .fetch(`${BASE_URL}/books/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBook(data);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formId = formData.get("id");
    const formTitle = formData.get("title");
    const formAuthor = formData.get("author");
    const formYear = formData.get("publicationYear");
    const formStatus = formData.get("readingStatus");

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
      .then((data) => {
        console.log(data);
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
          defaultValue={book.title}
          required
        />
      </label>
      <label htmlFor="author">
        Author
        <input
          type="text"
          name="author"
          id="author"
          defaultValue={book.author}
          required
        />
      </label>
      <label htmlFor="publicationYear">
        Publication Year
        <input
          type="text"
          name="publicationYear"
          id="publicationYear"
          defaultValue={book.year}
          required
        />
      </label>
      <select
        name="readingStatus"
        id="readingStatus"
        defaultValue={book.status}
        required
      >
        <option value="pending">Pending</option>
        <option value="inProgress">In Progress</option>
        <option value="read">Read</option>
      </select>
      <input type="submit" value="Add Book" />
      <input type="hidden" name="id" defaultValue={book.id} />
    </form>
  );
};
