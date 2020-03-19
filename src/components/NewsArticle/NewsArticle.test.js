import React from "react";
import { render } from "@testing-library/react";
import NewsArticle from "./NewsArticle.js";
import "@testing-library/jest-dom";

describe("NewsArticle", () => {
  it("text of headline and description are rendered", () => {
    const { getByText, debug } = render(
      <NewsArticle
        headline={"Here is a headline"}
        description={"My description goes here"}
        url={"http://www.denverpost.com"}
        img={
          "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp"
        }
        key={2}
      />
    );
    const headline = getByText("Here is a headline");
    const description = getByText("My description goes here");
    expect(headline).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(getByText("Read more")).toBeInTheDocument();
    debug();
  });
});
