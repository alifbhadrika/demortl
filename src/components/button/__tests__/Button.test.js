import React from "react";
import Button from "../Button";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tests for Button component", () => {
  it("snapshot button component", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { asFragment } = render(<Button popUpText={mockPopUpText} />);
    expect(asFragment(<Button popUpText={mockPopUpText} />)).toMatchSnapshot();
  });

  it("should render button component", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { getByText } = render(<Button popUpText={mockPopUpText} />);
    expect(getByText("Click Me!")).toBeInTheDocument();
  });

  it("we can also find by the role button", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { getByRole } = render(<Button popUpText={mockPopUpText} />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("we can also find by the test id", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { getByTestId } = render(<Button popUpText={mockPopUpText} />);
    expect(getByTestId("BUTTON_ID")).toBeInTheDocument();
  });

  it("doesn't shows pop up text when it never gets clicked", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { queryByText } = render(<Button popUpText={mockPopUpText} />);
    expect(queryByText(mockPopUpText)).toBeNull();
  });

  it("shows pop up text when it gets clicked", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { getByText, getByRole } = render(
      <Button popUpText={mockPopUpText} />
    );
    const myButton = getByRole("button");

    userEvent.click(myButton);
    expect(getByText(mockPopUpText)).toBeInTheDocument();
  });

  it("doesn't shows pop up text when it gets clicked twice", () => {
    const mockPopUpText = "This is just for the sake of the test";
    const { queryByText, getByRole } = render(
      <Button popUpText={mockPopUpText} />
    );
    const myButton = getByRole("button");

    fireEvent.click(myButton);
    fireEvent.click(myButton);
    expect(queryByText(mockPopUpText)).not.toBeInTheDocument();
  });
});
