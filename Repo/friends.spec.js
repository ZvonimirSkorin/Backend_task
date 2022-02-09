const jestMock = require("jest-mock");
const friendsRepo = require("./friends");

test("Testing getFriends function from repo", async () => {
  friendsRepo.getFriends = jestMock.fn().mockReturnValueOnce([{ id: 1, first_name: "John", last_name: "Smith", nickname: "Johnny" }]);
  expect(JSON.stringify(friendsRepo.getFriends())).toBe(JSON.stringify([{ id: 1, first_name: "John", last_name: "Smith", nickname: "Johnny" }]));
});
