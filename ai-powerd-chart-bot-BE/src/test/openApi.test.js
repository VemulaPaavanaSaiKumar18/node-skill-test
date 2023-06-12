const request = require("supertest");
const app = require("../..");

describe("Test Cases for Open API", () => {
  test("1: invoking API without passing body message", async () => {
    const res = await request(app).post("/api-dev/message").send();
    expect(res.statusCode).toEqual(500);
  });
  test("2: invoking API by passing body message", async () => {
    const res = await request(app)
      .post("/api-dev/message")
      .send({ message: "teal me a joke" });
    expect(res.statusCode).toEqual(200);
  });
});
