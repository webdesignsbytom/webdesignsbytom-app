import { Router } from 'express';
import {
  getAllComplaints,
  createNewComplaint,
  deleteComplaint,
  getComplaintsFromUser,
  getComplaintById,
  setComplaintToViewed,
} from '../controllers/complaints.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllComplaints);
router.get('/user-complaints/:userId', getComplaintsFromUser);
router.get('/:complaintId',validateAuthentication, validateAdminRole, getComplaintById);
router.post('/create', createNewComplaint);
router.put('/viewed/:complaintId', validateAuthentication, validateAdminRole, setComplaintToViewed);
router.delete('/delete/:complaintId', validateAuthentication, validateAdminRole, deleteComplaint);

export default router;
