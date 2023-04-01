import { Router } from 'express';
import {
  getAllPages,
  createNewPage,
  deletePage,
  getPagesFromUser,
  getPageById,
} from '../controllers/pages.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllPages);
router.get('/user-pages/:userId', validateAuthentication, validateAdminRole, getPagesFromUser);
router.get('/:pageId', getPageById);
router.post('/create', validateAuthentication, validateDeveloperRole, createNewPage);
router.delete('/delete/:pageId', validateAuthentication, validateDeveloperRole, deletePage);

export default router;
