const jwt = require("jsonwebtoken");

module.exports = async function (ctx, next) {
  if (ctx.request.headers.authorization) {
    if (jwt.verify(ctx.request.headers.authorization, "A very secret key")) return next();
  } else if (ctx.request.body.authorization) {
    if (jwt.verify(ctx.request.body.authorization, "A very secret key")) return next();
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed",
    };
  }
};
