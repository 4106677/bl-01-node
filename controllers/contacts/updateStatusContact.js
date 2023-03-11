const { Contact } = require('../../models');
const createError = require('http-errors');

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  console.log({ contactId });
  const data = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );
  if (!data) {
    throw createError(404, `Contact ${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = updateStatusContact;
