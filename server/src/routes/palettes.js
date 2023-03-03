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
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllPalettes);
router.get('/user-palettes/:userId', getPalettesFromUser);
router.get('/:paletteId', getPaletteById);
router.post('/create', createNewPalette);
router.delete('/delete/:id', deletePalette);

export default router;
