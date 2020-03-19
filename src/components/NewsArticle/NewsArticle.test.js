import React from "react";
import { render } from "@testing-library/react";
import NewsArticle from "./NewsArticle.js";
import "@testing-library/jest-dom";

describe("NewsArticle", () => {
  it("renders text that we expect", () => {
    const { getByText } = render(
      <NewsArticle
        headline={"Here is a headline"}
        description={"My description goes here"}
        url={"http://www.denverpost.com"}
      />
    );
    const titleElement = getByText("Here is a headline");
    expect(titleElement).toBeInTheDocument();
  });
});
