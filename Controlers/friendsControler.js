const { ValidateFriend } = require("../Repo/ValidateUser");
const friendsRepo = require("../Repo/friends");

const getFriends = async (ctx) => (ctx.body = await friendsRepo.getFriends());
const postFriend = async (ctx) => {
  if (ValidateFriend(ctx)) {
    ctx.body = await friendsRepo.addFriend(ctx.request.body);
  } else {
    ctx.status = 400;
    ctx.body = "Invalid data";
  }
};
const getFriendsUI = async (ctx) => {
  await ctx.render("Friends", {
    props: {
      friends: await friendsRepo.getFriends(),
    },
  });
};

module.exports = { getFriends, postFriend, getFriendsUI };
