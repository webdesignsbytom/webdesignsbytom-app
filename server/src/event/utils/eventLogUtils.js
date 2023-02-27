import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllEventsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all events',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all events');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};