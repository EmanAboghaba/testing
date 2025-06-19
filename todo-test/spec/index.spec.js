const request = require("supertest");
const app = require("../index"); // Adjust the path as necessary
const req = request(app);

describe("index routes", () => {
  it("GET / should respond with status 200 and []", async () => {
    let response = await req.get("/");
    expect(response.body.data).toEqual([]);
    expect(response.status).toBe(200);
  });
  it("GET /test should respond with status 404", async () => {
    let res = await req.get("/test");
    expect(res.body.message).toMatch(/not found/i);
    expect(res.status).toBe(404);
  });
});
