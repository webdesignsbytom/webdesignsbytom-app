import { Router } from 'express';
import {
  getAllPalettes,
  createNewPalette,
  deletePalette,
  getPalettesFromUser,
  getPaletteById,
} from '../controllers/palettes.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllPalettes);
router.get('/user-palettes/:userId', getPalettesFromUser);
router.get('/:paletteId', getPaletteById);
router.post('/create', createNewPalette);
router.delete('/delete/:paletteId', deletePalette);

export default router;
