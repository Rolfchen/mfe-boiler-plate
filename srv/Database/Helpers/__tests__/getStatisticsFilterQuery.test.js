import { expect } from "chai";
import getStatisticsFilterQuery from "../getStatisticsFilterQuery";

describe("Database/Helpers/getStatisticsFilterQuery", () => {
  it("can output query from filters", () => {
    const stubFilter = {
      before: "2020-06-11",
      after: "2020-06-09",
      buyer: "Woolworths",
    };
    const mockQuery = getStatisticsFilterQuery(stubFilter);
    expect(mockQuery).to.have.length(5);
    expect(mockQuery[0]["$match"]["$or"][0]).to.have.property(
      "name",
      stubFilter.buyer
    );
    expect(mockQuery[0]["$match"]["$or"][1]).to.have.property(
      "orgId",
      stubFilter.buyer
    );

    expect(mockQuery[1]["$match"]["addDate"]["$gte"]).to.equalDate(
      new Date(stubFilter.after)
    );
    expect(mockQuery[1]["$match"]["addDate"]["$lt"]).to.equalDate(
      new Date(stubFilter.before)
    );
  });

  it("can output query when no filters are passed. ", () => {
    const stubFilter = {};

    const mockQuery = getStatisticsFilterQuery(stubFilter);
    expect(mockQuery).to.have.length(6);
    expect(mockQuery[0]).to.have.property("$group");
    expect(mockQuery[3]).to.have.property("$unwind");
  });
});
