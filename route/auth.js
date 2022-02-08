const router = new (require("koa-router"))();
const authRepo = require("../Repo/auth");

router.post("/login", authRepo);

module.exports = router;
