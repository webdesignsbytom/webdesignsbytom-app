import { Router } from 'express';
import {
  getAllMessages,
  createNewMessage,
  deleteMessage,
  getMessagesFromUser,
  getMessageById,
  setMessageToViewed,
} from '../controllers/messages.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', validateAuthentication, validateAdminRole, getAllMessages);
router.get('/user-messages/:userId', validateAuthentication, getMessagesFromUser);
router.get('/:messageId', getMessageById);
router.post('/create', validateAuthentication, createNewMessage);
// router.post('/group-message', createGroupMessage);
router.put('/viewed/:messageId', setMessageToViewed);
router.delete('/delete/:messageId', deleteMessage);

export default router;
