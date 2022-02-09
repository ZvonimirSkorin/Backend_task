const jwt = require("jsonwebtoken");

module.exports = async function (ctx, next) {
  if (ctx.request?.headers?.authorization) {
    try {
      if (jwt.verify(ctx.request.headers.authorization, "A very secret key")) return next();
    } catch (err) {}
  }

  ctx.status = ctx.status = 401;
  ctx.body = {
    message: "Authentication failed",
  };
};
