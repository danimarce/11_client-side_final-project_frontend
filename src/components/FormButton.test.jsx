import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { FormButton } from "./FormButton";

describe("FormButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the correct text", () => {
    const mockTextButton = "Add New Book";

    const expectedText = "Add New Book";

    const { getByRole } = render(<FormButton textButton={mockTextButton} />);
    const formButton = getByRole("button");

    expect(formButton.textContent).toBe(expectedText);
  });

  it("should render the correct element", () => {
    const mockTextButton = "Add New Book";

    const expectedTagName = "BUTTON";

    const { getByRole } = render(<FormButton textButton={mockTextButton} />);
    const formButton = getByRole("button");

    expect(formButton.tagName).toBe(expectedTagName);
  });
});
