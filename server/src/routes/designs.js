import { Router } from 'express';
import {
  getAllDesigns,
  createNewDesign,
  deleteDesign,
  getDesignsFromUser,
  getDesignById,
  saveDesign
} from '../controllers/designs.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllDesigns);
router.get('/user-designs/:userId', getDesignsFromUser);
router.get('/:designId', getDesignById);
router.put('/user/:designId', saveDesign);
router.post('/create', createNewDesign);
router.delete('/delete/:designId', deleteDesign);

export default router;
