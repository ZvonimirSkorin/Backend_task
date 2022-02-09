const jestMock = require("jest-mock");
const authControler = require("./authControler");

test("Testing authControler", async () => {
  const dummy = { body: { password: "password" } };
  let ctx = {};
  ctx.request = dummy;
  await authControler(ctx);
  expect(ctx.status).toBe(200);
});

test("Testing authControler without valid password", async () => {
  const dummy = { body: { password: "secret" } };
  let ctx = {};
  ctx.request = dummy;
  await authControler(ctx);
  expect(ctx.status).toBe(401);
});
