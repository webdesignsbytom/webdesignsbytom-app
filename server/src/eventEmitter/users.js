import { myEmitter } from '../utils/eventEmitter';
import { getAllUsersEvent } from './utils/userUtils.js';

// Get all users
myEmitter.on('get-all-users', (user) => getAllUsersEvent(user));
