import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import SupplierSummaryTable, {
  SupplierSummaryTableProps as Props,
} from "../SupplierSummaryTable";

describe("src/Components/Buyers/SupplierSummaryTable", () => {
  it('loads SupplierSummaryTable with "business" variant correctly', async () => {
    const renderSupplierSummaryTable = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        viewBy: "business",
        supplierDetails: [
          {
            id: "111",
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
          {
            id: "222",
            name: "Joe & Liz Food Production Ltd.",
            abn: "123 123 123 123",
            supplyType: "indirect" as const,
            contact: {
              contactName: "Joe Murray",
              contactRole: "HR Manager",
              contactEmail: "j.murray@jornliz.com.au",
              contactNumber: "0425 000 000",
            },
          },
          {
            id: "333",
            name: "Heinz Co.",
            abn: "123 123 123 123",
            supplyType: "direct" as const,
            contact: {
              contactName: "Jane Smith",
              contactRole: "Sales Manager",
              contactEmail: "jane@heinz.com.au",
              contactNumber: "0425 000 000",
            },
          },
        ],
      };
      return render(<SupplierSummaryTable {...defaultProps} />);
    };

    const { getByTestId } = renderSupplierSummaryTable();

    // check business header and content is rendered
    expect(getByTestId("business-detail-header")).toBeTruthy();
  });

  it('loads SupplierSummaryTable with "crop" variant should not load "business" section correctly', async () => {
    const renderSupplierSummaryTable = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        viewBy: "crop",
        supplierDetails: [
          {
            id: "789",
            name: "Heinz Co.",
            abn: "123 123 123 123",
            supplyType: "direct" as const,
            contact: {
              contactName: "Jane Smith",
              contactRole: "Sales Manager",
              contactEmail: "jane@heinz.com.au",
              contactNumber: "0425 000 000",
            },
          },
        ],
      };
      return render(<SupplierSummaryTable {...defaultProps} />);
    };

    renderSupplierSummaryTable();

    const businessDetailSection = screen.queryByTestId(
      "business-detail-header"
    );

    // check business should not rendered
    expect(businessDetailSection).toBeNull();
  });
});
