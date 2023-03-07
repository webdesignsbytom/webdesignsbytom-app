import { Router } from 'express';
import {
  getAllContacts,
  getContactsByQuery,
  createNewContact,
  deleteContact
} from '../controllers/contacts.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllContacts);
router.get('/find/:query', getContactsByQuery);
router.post('/create', createNewContact);
router.delete('/delete/:contactId', deleteContact);

export default router;
