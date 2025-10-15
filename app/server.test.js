const request = require("supertest");
const app = require("./server"); // Import the Express app

describe("API Tests", () => {
  it("GET /api/hello", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello from Node.js API!");
  });

  it("POST /api/data", async () => {
    const response = await request(app)
      .post("/api/data")
      .send({ name: "John" });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, John! Your data was received.");
  });
});
