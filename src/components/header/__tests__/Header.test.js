import React from "react";
import Header from "../Header";
import { render } from "@testing-library/react";

describe("Tests for Header component", () => {
  it("snapshot header component", () => {
    const mockText = "This is just for the sake of the test";
    const { asFragment } = render(<Header text={mockText} />);
    expect(asFragment(<Header text={mockText} />)).toMatchSnapshot();
  });

  it("should render header component with the right text", () => {
    const mockText = "This is just for the sake of the test";
    const { getByText } = render(<Header text={mockText} />);
    expect(getByText(mockText)).not.toBeNull();
  });

  it("alternative way using toBeInTheDocument jest-dom uitility library", () => {
    const mockText = "This is just for the sake of the test";
    const { getByText } = render(<Header text={mockText} />);
    expect(getByText(mockText)).toBeInTheDocument();
  });
});
