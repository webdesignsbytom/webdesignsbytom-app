import { Router } from 'express';
import {
  getAllUsers,
  registerNewUser,
  verifyUser,
} from '../controllers/users.js';
import { validateAuthentication } from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, getAllUsers);
router.post('/register', registerNewUser);
router.get('/verify/:userId/:uniqueString', verifyUser);

export default router;
