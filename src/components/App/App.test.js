import React from "react";
import { render } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders the text we expect", () => {
    const { getByText } = render(<App />);
    expect(getByText("What's New")).toBeInTheDocument();
  });
});
