import { Router } from 'express';
import {
  getAllComponents,
  createNewComponent,
  deleteComponent
} from '../controllers/components.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllComponents);
router.post('/create', createNewComponent);
router.delete('/delete/:id', deleteComponent);

export default router;
