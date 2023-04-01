import { Router } from 'express';
import {
  getAllEvents,
} from '../controllers/events.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateDeveloperRole, getAllEvents);

export default router;
