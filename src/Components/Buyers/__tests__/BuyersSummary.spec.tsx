import React from "react";
import { render } from "@testing-library/react";
import BuyersSummary, { BuyersSummaryProps as Props } from "../BuyersSummary";

describe("src/Components/Buyers/BuyersSummary", () => {
  it("loads BuyersSummary eventually", async () => {
    const renderBuyersSummary = (props: Partial<Props> = {}) => {
      const defaultProps: Props = {
        summaryItems: [
          {
            title: "title-1",
            tooltipText: "title-1-tooltip",
            todayData: 123,
            sixMonthsData: 123123,
            oneYearData: 123123123,
          },
          {
            title: "title-2",
            tooltipText: "title-2-tooltip",
            todayData: 456,
            sixMonthsData: 456456,
            oneYearData: 456456456,
          },
        ],
      };
      return render(<BuyersSummary {...defaultProps} />);
    };

    const { getByText, getByTitle, getAllByRole } = renderBuyersSummary();

    // check if title and tooltip rendered
    expect(getByText(`title-1`)).toBeTruthy();
    expect(getByTitle(`title-1-tooltip`)).toBeTruthy();
    // check if data rendered
    expect(getByText(`123123123`)).toBeTruthy();
    expect(getAllByRole("rowgroup", { name: "" })).toHaveLength(2); // total data count
  });
});
