import { Router } from 'express';
import {
  getAllNotifications,
  createNotification,
  getNotificationsByUserId,
  setNotificationToViewed,
  deleteNotification,
  getViewedNotificationsByUserId
} from '../controllers/notifications.js';
import {
  validateAdminRole,
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllNotifications);
router.get('/user-notifications/:userId', getNotificationsByUserId);
router.get('/:userId/:viewed', getViewedNotificationsByUserId);
router.post('/create', createNotification);
router.put('/viewed/:notificationId', validateAuthentication, setNotificationToViewed);
router.delete('/delete/:notificationId', validateAuthentication, deleteNotification);

export default router;
