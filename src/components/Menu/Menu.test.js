import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu from "./Menu.js";
import "@testing-library/jest-dom";

describe("Form", () => {
  it("renders the text we expect", () => {
    const { getByText } = render(
      <Menu selectTopic={jest.fn()} currentTopic={jest.fn()} />
    );
    const localNews = getByText("Local news");
    const technology = getByText("Technology");
    const entertainment = getByText("Entertainment");
    const science = getByText("Science");
    const health = getByText("Health");
    expect(localNews).toBeInTheDocument();
    expect(technology).toBeInTheDocument();
    expect(entertainment).toBeInTheDocument();
    expect(science).toBeInTheDocument();
    expect(health).toBeInTheDocument();
  });

  it("selectTopic is called when the submit button is clicked", () => {
    const mockSelectTopic = jest.fn();
    const { getByText } = render(<Menu selectTopic={mockSelectTopic} />);
    const localNews = getByText("Local news");
    fireEvent.click(localNews);
    expect(mockSelectTopic).toHaveBeenCalledWith("local");
  });
});
