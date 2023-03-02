import { Router } from 'express';
import {
  getAllNotifications,
  createNotification,
  getNotificationsByUserId,
} from '../controllers/notifications.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllNotifications);
router.get('/:userId', getNotificationsByUserId);
router.post('/create', createNotification);

export default router;
