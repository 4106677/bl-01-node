const createError = require('http-errors');
const { Contact } = require('../../models');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findById(contactId);
  if (!data) {
    throw createError(404, `Contact ${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = getContactById;
