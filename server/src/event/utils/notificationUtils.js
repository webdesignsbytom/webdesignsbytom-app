import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllNotificationsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all notifications',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all notifications');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};