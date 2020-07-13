import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import BusinessName, { BusinessNameProps as Props } from "../BusinessName";

describe("src/Components/Common/BusinessName", () => {
  it("loads BusinessName correctly", async () => {
    const renderBusinessName = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        id: "TEST_ID",
        name: "TEST_NAME",
        abn: "TEST_ABN",
      };
      return render(<BusinessName {...defaultProps} />);
    };

    const { getByText } = renderBusinessName();

    // check if the component rendered
    expect(getByText("TEST_NAME")).toBeTruthy();
    expect(getByText("ABN: TEST_ABN")).toBeTruthy();
  });

  it("loads BusinessName correctly without ABN", async () => {
    const renderBusinessName = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        id: "TEST_ID",
        name: "TEST_NAME",
      };
      return render(<BusinessName {...defaultProps} />);
    };

    const { getByText } = renderBusinessName();
    const roleSection = screen.queryByTestId("BusinessName-abn");

    // check if only name rendered
    expect(getByText("TEST_NAME")).toBeTruthy();
    expect(roleSection).toBeNull();
  });
});
