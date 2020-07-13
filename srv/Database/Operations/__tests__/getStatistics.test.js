import "babel-polyfill";
import { expect } from "chai";
import { stubStatisticsCollection } from "../../../__stubs__/stubStatisticsCollection";
import getStatistics from "../getStatistics";
import { MongoClient } from "mongodb";
import { MongoDBService } from "../../MongoDBService";
import { Db } from "mongodb";

describe("Database/Operations/getStatistics", () => {
  beforeAll(async () => {
    // @TODO: Maybe worth creating a unified process for this.
    const connection = await MongoClient.connect(process.env.MONGO_URL);
    const db = await connection.db();
    const insertResult = await db
      .collection("Statistics")
      .insertMany(stubStatisticsCollection);
    if (insertResult) {
      connection.close();
    }

    // Initialize this using Mongo URL
    const stubClient = MongoDBService().getClient(process.env.MONGO_URL);
  });
  afterAll(async () => {
    MongoDBService().disconnect();
  });
  it("can get one buyer result from DB", async () => {
    const stubFilters = {
      before: "2020-06-11",
      after: "2020-06-09",
      buyer: "TEST1",
    };

    const mockResult = await getStatistics(stubFilters);
    const mockOrg = mockResult[0];

    expect(mockResult).to.have.length(1);
    expect(mockOrg.buyerId).to.equal(stubFilters.buyer);
    expect(mockOrg.total).to.equal(
      stubStatisticsCollection[0].supplierStats.length
    );
  });

  it("can get multiple buyer result from DB", async () => {
    const stubFilters = {
      before: "2020-06-11",
      after: "2020-06-09",
    };

    const mockResult = await getStatistics(stubFilters);
    const mockOrg = mockResult[1];

    expect(mockResult).to.have.length(3);
    expect(mockOrg.buyerId).to.equal(stubStatisticsCollection[1].orgId);
    expect(mockOrg.addDate).to.equalDate(stubStatisticsCollection[1].addDate);
  });
});
