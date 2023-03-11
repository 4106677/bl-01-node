const { Contact } = require('../../models');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite = null } = req.query;
  const skip = (page - 1) * limit;

  const data = await Contact.find(
    favorite ? { $and: [{ owner: _id }, { favorite }] } : { owner: _id },
    '',
    {
      skip,
      limit: Number(limit),
    }
  ).populate('owner', '_id email');
  res.json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = listContacts;
