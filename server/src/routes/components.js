import { Router } from 'express';
import {
  getAllComponents,
} from '../controllers/components.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllComponents);

export default router;
