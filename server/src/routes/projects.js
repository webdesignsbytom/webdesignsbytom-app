import { Router } from 'express';
import {
  getAllProjects,
  createNewProject,
  deleteProject,
  getProjectsFromUser,
  getProjectById,
} from '../controllers/projects.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/user-projects/:userId', getProjectsFromUser);
router.get('/:projectId', getProjectById);
router.post('/create', createNewProject);
router.delete('/delete/:projectId', deleteProject);

export default router;
