const request = require("supertest");
const { app } = require("./index.js");

test("/GET friends", async () => {
  const response = await request(app.callback()).get("/friends");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test("/POST friend", async () => {
  const response = await request(app.callback()).post("/friend").send({ first_name: "Marko", last_name: "Markic", nickname: "Marks" });
  expect(response.status).toBe(200);
});
test("/POST friend with wrong data type", async () => {
  const response = await await request(app.callback()).post("/friend").send({ first_name: "Marko", last_name: "Markic", nickname: 3 });
  expect(response.status).toBe(400);
});

test("/POST friend without first_name", async () => {
  const response = await request(app.callback()).post("/friend", { first_name: 3, last_name: "Markic", nickname: "Marks" });
  expect(response.status).toBe(400);
});
