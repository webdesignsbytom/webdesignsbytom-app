import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllComponentsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all components',
        content: `Success`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all components');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateComponentEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Create component',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Create component');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};