const router = new (require("koa-router"))();
const friendsRepo = require("../Repo/friends");
const authenticate = require("../middleware/authenticate.js");

router.get("/loginForm", async (ctx) => {
  await ctx.render("LoginForm");
});
router.get("/addFriend", async (ctx) => {
  await ctx.render("AddFriend");
});

module.exports = router;
