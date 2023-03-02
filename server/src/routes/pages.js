import { Router } from 'express';
import {
  getAllPages,
  createNewPage
} from '../controllers/pages.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllPages);
router.post('/create', createNewPage);

export default router;
