import { Router } from 'express';
import {
  getAllProjects,
  createNewProject,
  deleteProject,
  getProjectsFromUser,
} from '../controllers/projects.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/:userId', getProjectsFromUser);
router.post('/create', createNewProject);
router.delete('/delete/:id', deleteProject);

export default router;
