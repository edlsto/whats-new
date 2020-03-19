import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm.js";
import "@testing-library/jest-dom";

describe("Search Form", () => {
  it("renders the text we expect", () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchForm searchStories={jest.fn()} />
    );
    const searchBar = getByPlaceholderText("Search");
    expect(searchBar).toBeInTheDocument();
    const button = getByText("Search");
    expect(button).toBeInTheDocument();
  });

  it("searchStories is called with the correct argument when the submit button is clicked", () => {
    const mockSearchStories = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchForm searchStories={mockSearchStories} />
    );
    const searchBar = getByPlaceholderText("Search");
    const button = getByText("Search");
    fireEvent.change(searchBar, { target: { value: "the who" } });
    fireEvent.click(button);
    expect(getByPlaceholderText("Search").value).toEqual("");
    expect(mockSearchStories).toHaveBeenCalledWith("the who");
  });
});
