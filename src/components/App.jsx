import { useEffect, useState } from "react";
import { BooksContainer } from "./BooksContainer";
import { HeadingTitle } from "./HeadingTitle";

const BASE_URL = import.meta.env.VITE_API_URL;

export const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const endpointUrl = `${BASE_URL}/books`;

    globalThis
      .fetch(endpointUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <>
      <HeadingTitle title="My Book Collection" />
      <BooksContainer books={books} />
    </>
  );
};
