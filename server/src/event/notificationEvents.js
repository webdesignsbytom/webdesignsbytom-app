import { myEmitter } from '../utils/eventEmitter.js';
import {
    createGetAllNotificationsEvent,
} from './utils/notificationUtils.js';

export const myEmitterNotifications = myEmitter;

myEmitterNotifications.on('get-all-notifications', async (user) => createGetAllNotificationsEvent(user));
