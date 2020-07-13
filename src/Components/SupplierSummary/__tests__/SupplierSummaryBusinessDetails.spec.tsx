import React from "react";
import { render } from "@testing-library/react";
import SupplierSummaryBusinessDetails, {
  SupplierSummaryBusinessDetailsProps as Props,
} from "../SupplierSummaryBusinessDetails";

describe("src/Components/Suppliers/SupplierSummaryBusinessDetails", () => {
  it("loads SupplierSummaryBusinessDetails with business viewBy correctly", async () => {
    const renderSupplierSummaryBusinessDetails = (
      props: Partial<Props> = {}
    ) => {
      const defaultProps: Props = {
        detail: {
          id: "555",
          name: "Australia Fruit Co.",
          abn: "123 123 123 123",
          supplyType: "direct" as const,
          contact: {
            contactName: "John Smith",
            contactRole: "Program & Sales Manager",
            contactEmail: "john@australiafruit.com.au",
            contactNumber: "0425 000 000",
          },
        },
      };
      return render(<SupplierSummaryBusinessDetails {...defaultProps} />);
    };

    const { getByTestId } = renderSupplierSummaryBusinessDetails();

    // check if the correct row rendered
    expect(getByTestId("business-detail-data-item-555")).toBeTruthy();
  });
});
