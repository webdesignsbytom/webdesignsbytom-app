import { Router } from 'express';
import {
  getAllProjects,
  createNewProject,
  deleteProject
} from '../controllers/projects.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllProjects);
router.post('/create', createNewProject);
router.delete('/delete/:id', deleteProject);

export default router;
