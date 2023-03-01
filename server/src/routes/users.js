import { Router } from 'express';
import {
  getAllUsers,
  registerNewUser,
  verifyUser,
  resendVerificationEmail,
  sendPasswordReset,
  resetPassword,
  getUserById,
  deleteUser
} from '../controllers/users.js';
import { validateAuthentication, validateAdminRole } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllUsers);
router.post('/register', registerNewUser);
router.get('/:id', validateAuthentication, validateAdminRole, getUserById);
router.get('/verify/:userId/:uniqueString', verifyUser);
router.post('/verify/resend-email/:email', resendVerificationEmail)
router.post('/send-password-reset', sendPasswordReset);
router.post('/reset-password/:userId/:uniqueString', resetPassword);
router.delete('/delete-user/:userId', validateAuthentication, validateAdminRole, deleteUser);


export default router;
