import { Router } from 'express';
import {
  getAllComplaints,
  createNewComplaint,
  deleteComplaint,
  getComplaintsFromUser,
  getComplaintById,
} from '../controllers/complaints.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllComplaints);
router.get('/user-complaints/:userId', getComplaintsFromUser);
router.get('/:complaintId', getComplaintById);
router.post('/create', createNewComplaint);
router.delete('/delete/:id', deleteComplaint);

export default router;
