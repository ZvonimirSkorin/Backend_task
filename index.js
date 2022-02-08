const Koa = require("koa");
const router = new (require("koa-router"))();
const koaBody = require("koa-body");
const responseTime = require("koa-response-time");
const path = require("path");
const pugRender = require("koa-pug-render");

require("dotenv").config();
const app = new Koa();
app.use(responseTime({ hrtime: true }));
app.use(pugRender(path.join(__dirname, "/GUI")));
app.use(koaBody());

router.use(require("./route/friends").routes());
router.use(require("./route/friendsUi").routes());
router.use(require("./route/auth").routes());
app.use(router.routes());
app.listen(3000);
