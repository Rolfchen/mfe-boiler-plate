import React from "react";
import { render } from "@testing-library/react";
import TableLink, { TableLinkProps as Props } from "../TableLink";

describe("src/Components/Common/TableLink", () => {
  it("loads TableLink correctly", async () => {
    const renderTableLink = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        href: "TEST_HREF",
        children: <span>TEST_CHILDREN</span>,
      };
      return render(<TableLink {...defaultProps} />);
    };

    const { getByText, getByTestId } = renderTableLink();

    // check if the component rendered
    expect(getByText("TEST_CHILDREN")).toBeTruthy();
    expect(getByTestId("TableLink-test")).toHaveAttribute("href", "TEST_HREF");
  });
});
