import { Router } from 'express';
import {
  getAllNotifications,
} from '../controllers/notifications.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllNotifications);

export default router;
