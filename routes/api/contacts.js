const express = require('express');
const router = express.Router();
const { auth, ctrlWrapper, validation } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');
const { joiAddContactSchema, favoriteJoiSchema } = require('../../schemas');

router.get('/', auth, ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', auth, ctrlWrapper(ctrl.getContactById));

router.post(
  '/',
  auth,
  validation(joiAddContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

router.put(
  '/:contactId',
  validation(joiAddContactSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  '/:contactId/favorite',
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
