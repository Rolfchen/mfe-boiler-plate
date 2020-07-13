import app from "../app";
import request from "supertest";
import { expect } from "chai";

describe("app", () => {
  it("Can output root path", () => {
    const stubResponse = {
      message: "hello world 3",
    };
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.body.message).to.equal(stubResponse.message);
      });
  });
});
