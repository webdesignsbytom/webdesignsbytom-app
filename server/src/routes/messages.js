import { Router } from 'express';
import {
  getAllMessages,
  createNewMessage,
  deleteMessage,
  getMessagesFromUser,
  getMessageById,
  setMessageToViewed
} from '../controllers/messages.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/', getAllMessages);
router.get('/user-messages/:userId', getMessagesFromUser);
router.get('/:messageId', getMessageById);
router.post('/create', createNewMessage);
// router.post('/group-message', createGroupMessage);
router.put('/viewed/:messageId', setMessageToViewed);
router.delete('/delete/:messageId', deleteMessage);

export default router;
