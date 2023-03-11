const { auth, getCurrent } = require('./auth');
const login = require('./login');
const logout = require('./logout');

module.exports = {
  auth,
  login,
  getCurrent,
  logout,
};
