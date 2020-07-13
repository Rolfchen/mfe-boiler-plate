import { expect } from "chai";
import { stubStatistics } from "../../../__stubs__/stubStatistics";
import getStatisticsCounts from "../getStatisticsCounts";

describe("Database/Helpers/getStatisticsCounts", () => {
  it("can return statistics counts", () => {
    const stubStats = {
      ...stubStatistics,
    };
    const mockCounts = getStatisticsCounts(stubStats);
    expect(mockCounts.total).to.equal(4);
    expect(mockCounts.totalSites).to.equal(5);
    expect(mockCounts.totalOsaPassed).to.equal(3);
    expect(mockCounts.totalAuditComplete).to.equal(2);
    expect(mockCounts.totalTrainingPassed).to.equal(2);
    expect(mockCounts.totalCertified).to.equal(1);
    expect(mockCounts.totalFindingAlerts).to.equal(6);
  });
});
