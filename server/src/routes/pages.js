import { Router } from 'express';
import {
  getAllPages,
} from '../controllers/pages.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllPages);

export default router;
