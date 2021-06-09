import request from "supertest";
import app from "../app";

describe("get/CI", () => {
  test("test", (done) => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
    // expect(true).toBe(true);
  });
});

describe("get/CD", () => {
  test("test", (done) => {
    request(app)
      .get("/second")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
