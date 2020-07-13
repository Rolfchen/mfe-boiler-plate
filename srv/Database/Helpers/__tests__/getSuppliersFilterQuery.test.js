import { expect } from "chai";
import getSuppliersFilterQuery from "../getSuppliersFilterQuery";
import { stub } from "sinon";

describe("Database/Helpers/getSuppliersFilterQuery", () => {
  it("can get suppliers query when filter contains 'text search'", () => {
    const stubSearchFilter = {
      search: "John",
    };
    const mockQuery = getSuppliersFilterQuery(stubSearchFilter);
    expect(mockQuery).to.have.length(10);
    expect(mockQuery[0]).to.have.property("$match");
    expect(mockQuery[0].$match.$text.$search).to.equal(stubSearchFilter.search);
  });

  it("will return empty when filter is empty", () => {
    const stubSearchFilter = {};
    const mockQuery = getSuppliersFilterQuery(stubSearchFilter);
    expect(mockQuery).to.have.length(6);
    expect(mockQuery[1]).to.have.property("$lookup");
    expect(mockQuery[1].$lookup).to.have.property("from", "BusinessDetails");
  });

  it("can set limits to collection, and set skip", () => {
    const stubSearchFilter = {
      pg: 2,
      size: 30,
    };
    const mockQuery = getSuppliersFilterQuery(stubSearchFilter);
    expect(mockQuery).to.have.length(7); // Added skip step.
    expect(mockQuery[0]).to.have.property("$skip", 30);
    expect(mockQuery[1]).to.have.property("$limit", stubSearchFilter.size);
  });
});
