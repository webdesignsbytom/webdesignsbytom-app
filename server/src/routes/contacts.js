import { Router } from 'express';
import {
  getAllContacts,
  getContactsByQuery,
  createNewContact,
  deleteContact,
} from '../controllers/contacts.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllContacts);
router.get(
  '/find/:query',
  validateAuthentication,
  validateAdminRole,
  getContactsByQuery
);
router.post('/create', createNewContact);
router.delete(
  '/delete/:contactId',
  validateAuthentication,
  validateAdminRole,
  deleteContact
);

export default router;
