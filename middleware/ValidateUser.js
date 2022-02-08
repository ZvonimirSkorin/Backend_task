const Joi = require("joi");

const schema = Joi.object({
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  nickname: Joi.string().optional().allow(null).allow("").empty(""),
});

async function ValidateFriend(ctx, next) {
  const friendData = ctx.request.body;
  if (!schema.validate({ first_name: friendData.first_name, last_name: friendData.last_name, nickname: friendData.nickname }).error) {
    return next();
  }

  ctx.status = 400;
  ctx.body = "Invalid data";
}

module.exports = { ValidateFriend };
