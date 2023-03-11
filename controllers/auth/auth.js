const { Conflict } = require("http-errors");
const { User } = require("../../models");
const bcryptjs = require("bcryptjs");

const auth = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email in use");
  }

  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const data = await User.create({ email, password: hashPassword, name });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
};

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      email,
      subscription,
    },
  });
};

module.exports = { auth, getCurrent };
