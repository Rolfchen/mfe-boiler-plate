import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterButton, { FilterButtonProps as Props } from "../FilterButton";

describe("src/Components/Common/FilterButton", () => {
  it("can loads FilterButton correctly", async () => {
    const renderFilterButton = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        label: "filter button text",
        children: <p>something as children here</p>,
      };
      return render(<FilterButton {...defaultProps} />);
    };

    const { getByText } = renderFilterButton();

    // check if the component rendered
    expect(getByText("filter button text")).toBeTruthy();
  });

  it("can show the children element on button click", async () => {
    const renderFilterButton = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        label: "filter button text",
        children: <p>something as children here</p>,
      };
      return render(<FilterButton {...defaultProps} />);
    };

    const { getByText, getByTestId } = renderFilterButton();

    // check if the component returned correct selected view types
    fireEvent.click(getByText("filter button text"));
    expect(getByTestId("filter-button-content")).toBeTruthy();
    expect(getByText("something as children here")).toBeTruthy();
  });
});
