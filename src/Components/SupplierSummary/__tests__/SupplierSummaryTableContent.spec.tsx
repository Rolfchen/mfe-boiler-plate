import React from "react";
import { render } from "@testing-library/react";
import SupplierSummaryTableContent, {
  SupplierSummaryTableContentProps as Props,
} from "../SupplierSummaryTableContent";

describe("src/Components/Suppliers/SupplierSummaryTableContent", () => {
  it("loads SupplierSummaryTableContent with business viewBy correctly", async () => {
    const renderSupplierSummaryTableContent = (props: Partial<Props> = {}) => {
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
        ],
      };
      return render(<SupplierSummaryTableContent {...defaultProps} />);
    };

    const { getByTestId } = renderSupplierSummaryTableContent();

    // check if the correct row rendered
    expect(getByTestId("business-detail-data-item-111")).toBeTruthy();
    expect(getByTestId("business-detail-data-item-222")).toBeTruthy();
  });
});
