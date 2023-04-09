import { Router } from 'express';
import {
  getAllDesigns,
  createNewDesign,
  deleteDesign,
  getDesignsFromUser,
  getDesignById,
  saveDesign,
} from '../controllers/designs.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllDesigns);
router.get('/user-designs/:userId', validateAuthentication, getDesignsFromUser);
router.get('/:designId', validateAuthentication, getDesignById);
router.put('/user/:designId', validateAuthentication, saveDesign);
router.post('/create', validateAuthentication, createNewDesign);
router.delete('/:userId/delete/:designId', validateAuthentication, deleteDesign);

export default router;
