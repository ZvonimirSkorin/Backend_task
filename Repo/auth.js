const jwt = require("jsonwebtoken");

module.exports = async function (ctx, next) {
  if (ctx.request.body.password === "password") {
    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ role: "admin" }, "A very secret key", { expiresIn: 60 }),
      message: "Successfully logged in!",
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed",
    };
  }
};
