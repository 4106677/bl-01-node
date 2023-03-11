const { joiRegisterSchema, joiLoginSchema } = require('./user');
const { joiAddContactSchema, favoriteJoiSchema } = require('./constacts');

module.exports = {
  joiLoginSchema,
  joiRegisterSchema,
  joiAddContactSchema,
  favoriteJoiSchema,
};
