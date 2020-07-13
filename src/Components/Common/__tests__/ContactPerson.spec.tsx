import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ContactPerson, { ContactPersonProps as Props } from "../ContactPerson";

describe("src/Components/Common/ContactPerson", () => {
  it("loads ContactPerson correctly", async () => {
    const renderContactPerson = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        name: "TEST_NAME",
        role: "TEST_ROLE",
      };
      return render(<ContactPerson {...defaultProps} />);
    };

    const { getByText } = renderContactPerson();

    // check if the component rendered
    expect(getByText("TEST_NAME")).toBeTruthy();
    expect(getByText("TEST_ROLE")).toBeTruthy();
  });

  it("loads ContactPerson correctly without role", async () => {
    const renderContactPerson = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        name: "TEST_NAME",
      };
      return render(<ContactPerson {...defaultProps} />);
    };

    const { getByText } = renderContactPerson();
    const roleSection = screen.queryByTestId("ContactPerson-role");

    // check if only name rendered
    expect(getByText("TEST_NAME")).toBeTruthy();
    expect(roleSection).toBeNull();
  });
});
