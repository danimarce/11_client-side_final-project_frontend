import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { FormContainer } from "./FormContainer";

describe("FormContainer", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render a form", () => {
    const mockBook = {
      id: 0,
      title: "",
      author: "",
      year: "",
      status: "pending",
    };
    const expectedTagName = "FORM";

    const { getByText } = render(<FormContainer book={mockBook} />);
    const title = getByText("Title");
    const form = title.parentElement;

    expect(form.tagName).toBe(expectedTagName);
  });

  it("should render the correct title", () => {
    const mockBook = {
      id: 0,
      title: "testTitle",
      author: "",
      year: "",
      status: "pending",
    };
    const expectedTitle = "testTitle";

    const { getByDisplayValue } = render(<FormContainer book={mockBook} />);
    const title = getByDisplayValue(expectedTitle);

    expect(title.value).toBe(expectedTitle);
  });

  it("should render the correct year", () => {
    const mockBook = {
      id: 0,
      title: "testTitle",
      author: "",
      year: 2030,
      status: "pending",
    };
    const expectedYear = "2030";

    const { getByDisplayValue } = render(<FormContainer book={mockBook} />);
    const year = getByDisplayValue(expectedYear);

    expect(year.value).toBe(expectedYear);
  });
});
