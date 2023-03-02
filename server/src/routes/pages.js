import { Router } from 'express';
import {
  getAllPages,
  createNewPage,
  deletePage
} from '../controllers/pages.js';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllPages);
router.post('/create', createNewPage);
router.delete('/delete/:id', deletePage);


export default router;
