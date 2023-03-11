const Joi = require("joi");

const joiAddContactSchema = Joi.object({
  name: Joi.string().required(),
  // email: Joi.string().email().required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  favorite: Joi.bool(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required().label("missing field favorite"),
});

module.exports = { joiAddContactSchema, favoriteJoiSchema };
