import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { BookCard } from "./BookCard";

describe("BookCard", () => {
  afterEach(() => {
    cleanup();
  })
  
  it("should render the correct title", () => {
    const mockBook = {
      id: 1,
      title: "My first book",
      author: "John Doe",
      year: 2030,
      status: "pending",
    };
    const expectedTitle = "My first book";
    const expectedTagName = "H3";

    const { getByText } = render(<BookCard book={mockBook} />)
    const bookTitle = getByText(expectedTitle);
    
    expect(bookTitle.textContent).toBe(expectedTitle);
    expect(bookTitle.tagName).toBe(expectedTagName);
  });

  it("should render the correct year", () => {
    const mockBook = {
      id: 1,
      title: "My first book",
      author: "John Doe",
      year: 2030,
      status: "pending",
    };
    const expectedYear = "2030";
    const expectedTagName = "SPAN";

    const { getByText } = render(<BookCard book={mockBook} />)
    const bookTitle = getByText(expectedYear);
    
    expect(bookTitle.textContent).toBe(expectedYear);
    expect(bookTitle.tagName).toBe(expectedTagName);
  });
});
