const router = new (require("koa-router"))();
const friendsRepo = require("../Repo/friends");
const authenticate = require("../middleware/authenticate.js");
const { ValidateFriend } = require("../middleware/ValidateUser");

router.get("/friends", authenticate, async (ctx) => (ctx.body = await friendsRepo.getFriends()));
router.post("/friend", ValidateFriend, authenticate, async (ctx) => (ctx.body = await friendsRepo.addFriend(ctx.request.body, ctx)));
router.get("/friendsUI", async (ctx) => {
  await ctx.render("Friends", {
    props: {
      friends: await friendsRepo.getFriends(),
    },
  });
});

module.exports = router;
