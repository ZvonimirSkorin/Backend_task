const request = require("supertest");
const { app } = require("./index.js");
const authenticate = require("./middleware/authenticate");

test("middleware authenticate with valid token", async () => {
  const tokenResponse = await request(app.callback()).post("/login").send({ password: "password" });
  const ctx = {};
  ctx.request = { headers: { authorization: tokenResponse.body.token } };
  const response = await authenticate(ctx, () => {});
  expect(ctx.status).toBe(undefined);
});
test("/middleware authenticate with invalid token", async () => {
  const tokenResponse = await request(app.callback()).post("/login").send({ password: "password" });
  const ctx = {};
  ctx.request = { headers: { authorization: "invalid token" } };
  const response = await authenticate(ctx, () => {});
  expect(ctx.status).toBe(401);
});

test("middleware authenticate without token", async () => {
  const ctx = {};
  const response = await authenticate(ctx, () => {});
  expect(ctx.status).toBe(401);
});
