import { Router } from 'express';
import {
  getAllUsers,
  registerNewUser,
  verifyUser,
} from '../controllers/users.js';
import { validateAuthentication, validateAdminRole } from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllUsers);
router.post('/register', registerNewUser);
router.get('/verify/:userId/:uniqueString', verifyUser);

export default router;
