import { Router } from 'express';
import {
  getAllComplaints,
  createNewComplaint,
  deleteComplaint,
  getComplaintsFromUser,
  getComplaintById,
  setComplaintToViewed
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
router.put('/viewed/:complaintId', setComplaintToViewed);
router.delete('/delete/:complaintId', deleteComplaint);

export default router;
