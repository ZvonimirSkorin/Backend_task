const Koa = require("koa");
const router = require("koa-router");
const koaBody = require("koa-body");
require("dotenv").config();
const app = new Koa();
app.use(koaBody());
const _ = router(); //Instantiate the router
const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  },
});

_.get("/friends", async (ctx) => {
  try {
    ctx.body = await knex.select("*").from("friends");
  } catch (error) {
    ctx.body = error;
  }
});

_.post("/friend", async (ctx) => {
  try {
    ctx.body = await knex("friends").insert({
      first_name: ctx.request.body.first_name,
      last_name: ctx.request.body.last_name,
      nickname: ctx.request.body.nickname,
    });
  } catch (err) {
    console.log(err);
    ctx.body = err;
  }
});

app.use(_.routes());
app.listen(3000);
