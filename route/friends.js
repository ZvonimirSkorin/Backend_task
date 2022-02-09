const router = new (require("koa-router"))();
const authenticate = require("../middleware/authenticate.js");
const friendControler = require("../Controlers/friendsControler.js");

router.get("/friends", authenticate, friendControler.getFriends);
router.post("/friend", authenticate, friendControler.postFriend);
router.get("/friendsUI", friendControler.getFriendsUI);

module.exports = router;
