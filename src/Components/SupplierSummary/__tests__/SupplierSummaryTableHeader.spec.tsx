import React from "react";
import { render } from "@testing-library/react";
import SupplierSummaryTableHeader, {
  SupplierSummaryTableHeaderProps as Props,
} from "../SupplierSummaryTableHeader";

describe("src/Components/Suppliers/SupplierSummaryTableHeader", () => {
  it("loads SupplierSummaryTableHeader with business viewBy correctly", async () => {
    const renderSupplierSummaryTableHeader = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        viewBy: "business",
      };
      return render(<SupplierSummaryTableHeader {...defaultProps} />);
    };

    const { getByTestId, getByText } = renderSupplierSummaryTableHeader();

    // check if component rendered
    expect(getByTestId("business-detail-header")).toBeTruthy();
    expect(getByText(`Business Name`)).toBeTruthy();
    expect(getByText(`Supplier Type`)).toBeTruthy();
    expect(getByText(`Contact Person`)).toBeTruthy();
    expect(getByText(`Contact Email`)).toBeTruthy();
    expect(getByText(`Contact Number`)).toBeTruthy();
  });
});
