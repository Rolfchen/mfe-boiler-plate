import "babel-polyfill";
import { MongoClient } from "mongodb";
import { expect } from "chai";
import { stubSearchIndexCollection } from "../../../__stubs__/stubSearchIndexCollection";
import { stubBusinessDetailCollection } from "../../../__stubs__/stubBusinessDetailCollection";
import { stubPBUDetailCollection } from "../../../__stubs__/stubPBUDetailCollection";
import { stubUsersCollection } from "../../../__stubs__/stubUsersCollection";
import MongoDBService from "../../MongoDBService";
import getSuppliers from "../getSuppliers";

describe("Database/Operations/getSuppliers", () => {
  beforeAll(async () => {
    const connection = await MongoClient.connect(process.env.MONGO_URL);
    const db = await connection.db();

    const insertSearchIndexResult = await db
      .collection("SearchIndex")
      .insertMany(stubSearchIndexCollection);
    const insertBusinessDetailResult = await db
      .collection("BusinessDetails")
      .insertMany(stubBusinessDetailCollection);
    const insertPBUDetailCollection = await db
      .collection("PBUDetails")
      .insertMany(stubPBUDetailCollection);
    const insertUserDetailResult = await db
      .collection("Users")
      .insertMany(stubUsersCollection);

    if (
      insertSearchIndexResult &&
      insertBusinessDetailResult &&
      insertUserDetailResult &&
      insertPBUDetailCollection
    ) {
      await db.collection("SearchIndex").createIndex({
        abn: "text",
        businessName: "text",
        email: "text",
        fullName: "text",
        pbuName: "text",
        stateCode: "text",
        tradingName: "text",
      });
      connection.close();
    }

    MongoDBService().getClient(process.env.MONGO_URL);
  });
  afterAll(async () => {
    MongoDBService().disconnect();
  });

  it("can search for keyword", async () => {
    const stubKeyword1 = "John";
    const stubKeyword2 = "hello";
    const stubKeyword3 = "11111111112";

    const mockResult1 = await getSuppliers({
      search: stubKeyword1,
    });

    const mockResult2 = await getSuppliers({
      search: stubKeyword2,
    });

    const mockResult3 = await getSuppliers({
      search: stubKeyword3,
    });

    expect(mockResult1).to.have.length(3);
    expect(mockResult2).to.have.length(1);
    expect(mockResult3).to.have.length(1);
    expect(mockResult2[0].physicalAddress).to.have.property(
      "address",
      "1 Test Dr"
    );
    expect(mockResult1[0]).to.have.property("abn");
    expect(mockResult1[0]).to.have.property("user");
    expect(mockResult1[0]).to.have.property("certStatus");
    expect(mockResult1[0]).to.have.property("controlledSites");
  });

  it("can limit the results", async () => {
    const stubFilter = {
      size: 2,
    };
    const stubFilter1 = {
      size: 2,
      pg: 2,
    };
    const mockResult = await getSuppliers(stubFilter);
    const mockResult1 = await getSuppliers(stubFilter1);
    expect(mockResult).to.have.length(2);
    expect(mockResult1).to.have.length(1);
  });

  it("won't return results if no search was found", async () => {
    const stubKeyword = "asdfasdasdfasdfasdf";

    const mockResult = await getSuppliers({
      search: stubKeyword,
    });

    expect(mockResult).to.have.length(0);
  });
});
