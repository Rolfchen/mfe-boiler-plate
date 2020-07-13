import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar, { SearchBarProps as Props } from "../SearchBar";

describe("src/Components/Common/SearchBar", () => {
  it("can loads SearchBar correctly", async () => {
    const mockHandleClick = jest.fn((x) => x);
    const renderSearchBar = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        label: "Search Something",
        onSearch: (result) => mockHandleClick(result),
      };
      return render(<SearchBar {...defaultProps} />);
    };

    const { getByTestId, getByText, getByDisplayValue } = renderSearchBar();

    // check if the component rendered
    expect(getByTestId("SearchBar-test")).toBeTruthy();
    expect(getByText("Search Something")).toBeTruthy();
  });

  it("can return the correct search text on click", async () => {
    const mockHandleClick = jest.fn((x) => x);
    const renderSearchBar = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        label: "Search Something",
        onSearch: (result) => mockHandleClick(result),
      };
      return render(<SearchBar {...defaultProps} />);
    };

    const { getByText, getByTestId } = renderSearchBar();

    // check if the component returned correct selected view types
    // user type something to search
    fireEvent.change(getByTestId("SearchBar-input"), {
      target: { value: "search text" },
    });
    fireEvent.click(getByText("Search Something"));
    expect(mockHandleClick.mock.results[0].value).toBe("search text");
  });

  it("can return the correct search text on enter", async () => {
    const mockHandleClick = jest.fn((x) => x);
    const renderSearchBar = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        label: "Search Something",
        onSearch: (result) => mockHandleClick(result),
      };
      return render(<SearchBar {...defaultProps} />);
    };

    const { getByTestId, getByDisplayValue } = renderSearchBar();

    // check if the component returned correct selected view types
    // user type something to search
    fireEvent.change(getByTestId("SearchBar-input"), {
      target: { value: "search text" },
    });
    // mimic user enter after typing something
    fireEvent.keyPress(getByDisplayValue("search text"), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(mockHandleClick.mock.results[0].value).toBe("search text");
  });
});
