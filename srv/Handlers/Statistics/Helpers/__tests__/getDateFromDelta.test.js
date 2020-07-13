import { expect } from "chai";
import getDateFromDelta from "../getDateFromDelta";

describe("Handlers/Statistics/Helpers", () => {
  it("can get a date from a base Date and a delta string", () => {
    const stubFromDate = new Date("2020-06-01");

    const mockDateDefault = getDateFromDelta(stubFromDate);
    const mockDate6M = getDateFromDelta(stubFromDate, "6M");
    const mockDate12M = getDateFromDelta(stubFromDate, "12M");

    expect(mockDateDefault).to.equalDate(stubFromDate);
    expect(mockDate6M).to.not.equalDate(new Date("2019-11-01"));
    expect(mockDate6M).to.equalDate(new Date("2019-12-01"));
    expect(mockDate12M).to.equalDate(new Date("2019-06-01"));
  });

  it("can get a date from a base date string and a delta string", () => {
    const stubFromDateString = "2020-06-01";

    const mockDateDefault = getDateFromDelta(stubFromDateString);
    const mockDate6M = getDateFromDelta(stubFromDateString, "6M");
    const mockDate12M = getDateFromDelta(stubFromDateString, "12M");

    expect(mockDateDefault).to.equalDate(new Date(stubFromDateString));
    expect(mockDate6M).to.not.equalDate(new Date("2019-11-01"));
    expect(mockDate6M).to.equalDate(new Date("2019-12-01"));
    expect(mockDate12M).to.equalDate(new Date("2019-06-01"));
  });
});
