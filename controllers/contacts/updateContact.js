const { Contact } = require('../../models');
const createError = require('http-errors');

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!data) {
    throw createError(404, `Contact ${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = updateContact;
