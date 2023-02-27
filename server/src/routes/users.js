import { Router } from 'express'
import { getAllUsers, registerNewUser, verifyUser } from '../controllers/users.js'

const router = Router();

router.get('/', getAllUsers);
router.post('/register', registerNewUser);
router.get('/verify/:userId/:uniqueString', verifyUser)


export default router
