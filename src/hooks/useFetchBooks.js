/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useCallback } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export const useFetchBooks = ({ updateBooks, updateLoading }) => {
  const fetchBooks = useCallback(() => {
    const endpointUrl = `${BASE_URL}/books`;

    globalThis
      .fetch(endpointUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateBooks(data);
        updateLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        alert(
          "An error occurred while fetching the books. Error: " + error.message
        );
        updateLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return {
    fetchBooks,
  };
};
