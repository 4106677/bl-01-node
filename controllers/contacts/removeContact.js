const createError = require('http-errors');
const { Contact } = require('../../models');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const data = await Contact.findByIdAndRemove(contactId);
  if (!data) {
    throw createError(404, `Contact ${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data,
  });
};

module.exports = removeContact;
