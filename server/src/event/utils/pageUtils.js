import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllPagesEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all pages',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all pages');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};