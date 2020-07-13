import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ViewTypeButtons, {
  ViewTypeButtonsProps as Props,
} from "../ViewTypeButtons";

import ContactsIcon from "@material-ui/icons/Contacts";
import MenuBookIcon from "@material-ui/icons/MenuBook";

describe("src/Components/Common/ViewTypeButtons", () => {
  it("can loads ViewTypeButtons correctly", async () => {
    const mockHandleClick = jest.fn((x) => x);
    const renderViewTypeButtons = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        selected: "business",
        viewTypes: [
          {
            name: "business",
            icon: <ContactsIcon />,
            label: "Business Details",
          },
          {
            name: "certificate",
            icon: <MenuBookIcon />,
            label: "Certificate Details",
          },
        ],
        onClick: (result) => mockHandleClick(result),
      };
      return render(<ViewTypeButtons {...defaultProps} />);
    };

    const { getByTestId } = renderViewTypeButtons();

    // check if the component rendered
    expect(getByTestId("viewTypeButtons-business")).toBeTruthy();
    expect(getByTestId("viewTypeButtons-certificate")).toBeTruthy();
  });

  it("can return the correct selected view types on click", async () => {
    const mockHandleClick = jest.fn((x) => x);
    const renderViewTypeButtons = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        selected: "business",
        viewTypes: [
          {
            name: "business",
            icon: <ContactsIcon />,
            label: "Business Details",
          },
          {
            name: "certificate",
            icon: <MenuBookIcon />,
            label: "Certificate Details",
          },
        ],
        onClick: (result) => mockHandleClick(result),
      };
      return render(<ViewTypeButtons {...defaultProps} />);
    };

    const { getByTestId } = renderViewTypeButtons();

    // check if the component returned correct selected view types
    fireEvent.click(getByTestId("viewTypeButtons-certificate"));
    expect(mockHandleClick.mock.results[0].value).toBe("certificate");
  });
});
