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
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllPages);
router.get('/user-pages/:userId', getPagesFromUser);
router.get('/:pageId', getPageById);
router.post('/create', createNewPage);
router.delete('/delete/:pageId', deletePage);

export default router;
