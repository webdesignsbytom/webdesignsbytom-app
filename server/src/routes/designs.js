import { Router } from 'express';
import {
  getAllDesigns,
  createNewDesign,
  deleteDesign,
  getDesignsFromUser,
  getDesignById,
} from '../controllers/designs.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllDesigns);
router.get('/user-designs/:userId', getDesignsFromUser);
router.get('/:designId', getDesignById);
router.post('/create', createNewDesign);
router.delete('/delete/:id', deleteDesign);

export default router;
