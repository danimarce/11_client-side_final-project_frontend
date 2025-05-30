import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { BooksContainer } from "./BooksContainer";

describe("BooksContainer", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render one book card for each book", () => {
    const mockBooks = [
      {
        id: 1,
        title: "Test",
        author: "John Doe",
        year: 2025,
        status: "pending",
      },
      {
        id: 2,
        title: "Test",
        author: "John Doe",
        year: 2025,
        status: "read",
      },
    ];
    const expectedNumberOfBooks = 2;
    const expectedTagName = "LI";

    const { getAllByRole } = render(<BooksContainer books={mockBooks} />);
    const booksItems = getAllByRole("listitem");

    expect(booksItems.length).toBe(expectedNumberOfBooks);
    expect(booksItems[0].tagName).toBe(expectedTagName);
  });

  it("should render the correct class", () => {
    const mockBooks = [
      {
        id: 1,
        title: "Test",
        author: "John Doe",
        year: 2025,
        status: "pending",
      },
      {
        id: 2,
        title: "Test",
        author: "John Doe",
        year: 2025,
        status: "read",
      },
    ];

    const { getByRole } = render(<BooksContainer books={mockBooks} />);
    const listItems = getByRole("list");

    expect(listItems.className).toMatch(/books__container/);
  });
});
