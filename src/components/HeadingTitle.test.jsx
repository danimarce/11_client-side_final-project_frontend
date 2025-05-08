import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { HeadingTitle } from "./HeadingTitle";

describe("HeadingTitle", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the title correctly", () => {
    const headingTitle = "My Book Collection";
    const expectedText = "My Book Collection";

    const { getByText } = render(<HeadingTitle title={headingTitle} />);
    const headingItem = getByText(headingTitle);

    expect(headingItem.textContent).toBe(expectedText);
    expect(headingItem.tagName).toBe("H1");
  });
});
