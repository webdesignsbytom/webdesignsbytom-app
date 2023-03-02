import { Router } from 'express';
import {
  getAllComponents,
  createNewComponent,
} from '../controllers/components.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllComponents);
router.post('/create', createNewComponent);

export default router;
