function getMessage(ctx, next) {
  ctx.body = "Hello world! 2";
}

module.exports = { getMessage };
