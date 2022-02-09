const Joi = require("joi");

const schema = Joi.object({
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  nickname: Joi.string().optional().allow(null).allow("").empty(""),
});

function ValidateFriend(ctx) {
  const { first_name, last_name, nickname } = ctx.request.body;

  return !schema.validate({ first_name: first_name, last_name: last_name, nickname: nickname }).error;
}

module.exports = { ValidateFriend };
