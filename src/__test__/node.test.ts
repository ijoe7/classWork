import supertest from "supertest";
import app from "../app";

describe("get/CI", () => {
  test("test", () => {
    expect(true).toBe(true);
  });
});


describe("get/CD", () => {
  test("test", () => {
    expect(2 * 2).toBe(4);
  });
});