import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders the text we expect", () => {
    const { getByText, debug } = render(<App />);
    expect(getByText("What's New")).toBeInTheDocument();
  });

  // it("selectTopic is called when the submit button is clicked", () => {
  //   const mockSelectTopic = jest.fn();
  //   const { getByText } = render(<Menu selectTopic={mockSelectTopic} />);
  //   const localNews = getByText("Local news");
  //   fireEvent.click(localNews);
  //   expect(mockSelectTopic).toHaveBeenCalledWith("local");
  // });
});
