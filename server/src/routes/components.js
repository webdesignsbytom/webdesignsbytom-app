import { Router } from 'express';
import {
  getAllComponents,
  getComponentsByQuery,
  createNewComponent,
  deleteComponent
} from '../controllers/components.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllComponents);
router.get('/find/:query', getComponentsByQuery);
router.post('/create', validateAuthentication, validateDeveloperRole, createNewComponent);
router.delete('/delete/:componentId', validateAuthentication, validateDeveloperRole, deleteComponent);

export default router;
