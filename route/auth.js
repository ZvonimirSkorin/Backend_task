const router = new (require("koa-router"))();
const authControler = require("../Controlers/authControler");

router.post("/login", authControler);

module.exports = router;
