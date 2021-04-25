import "dotenv/config";
import app from "../src/App";
import superTest from "supertest";

const server = app.listen(process.env.PORT, () => {
  console.log(`Express server listening tests on port ${process.env.PORT}!`);
});

const request = superTest(server);

test("Check Country List", async (done) => {
  const response = await request.get("/api/countries");
  expect(response.status).toBe(200);
  done();
});
test("Check Country List", async (done) => {
  const response = await request.get("/api/currencies");
  expect(response.status).toBe(200);
  done();
});

afterAll(() => {
  server.close();
});
