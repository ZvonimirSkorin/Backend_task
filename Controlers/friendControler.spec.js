const jestMock = require("jest-mock");
const friendsRepo = require("../Repo/friends");
const { getFriends, postFriend } = require("./friendsControler");

test("Testing getFriends controler", async () => {
  const dummy = [{ id: 1, first_name: "John", last_name: "Smith", nickname: "Johnny" }];
  let ctx = {};
  friendsRepo.getFriends = jestMock.fn().mockReturnValueOnce(dummy);
  await getFriends(ctx);
  expect(ctx.body).toBe(dummy);
});

test("Testing postFriend controler with valid data", async () => {
  const dummy = { body: { first_name: "John", last_name: "Smith", nickname: "Johnny" } };
  let ctx = {};
  ctx.request = dummy;
  friendsRepo.addFriend = jestMock.fn().mockReturnValueOnce("friend added");
  await postFriend(ctx);
  expect(ctx.body).toBe("friend added");
});

test("Testing postFriend controler without valid first_name data type", async () => {
  const dummy = { body: { first_name: null, last_name: "Smith", nickname: "Johnny" } };
  let ctx = {};
  ctx.request = dummy;
  friendsRepo.addFriend = jestMock.fn().mockReturnValueOnce("friend added");
  await postFriend(ctx);
  expect(ctx.status).toBe(400);
});

test("Testing postFriend controler without valid last_name data type", async () => {
  const dummy = { body: { first_name: "John", last_name: 3, nickname: "Johnny" } };
  let ctx = {};
  ctx.request = dummy;
  friendsRepo.addFriend = jestMock.fn().mockReturnValueOnce("friend added");
  await postFriend(ctx);
  expect(ctx.status).toBe(400);
});

test("Testing postFriend controler without nickname without string as data type", async () => {
  const dummy = { body: { first_name: "John", last_name: "Smith", nickname: null } };
  let ctx = {};
  ctx.request = dummy;
  friendsRepo.addFriend = jestMock.fn().mockReturnValueOnce("friend added");
  await postFriend(ctx);
  expect(ctx.body).toBe("friend added");
});
