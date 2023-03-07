import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllMessagesEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all messages',
        content: `Success`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all messages');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateMessageEvent = async (user) => {
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
        topic: 'Create message',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Create message');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};


export const createDeleteMessageEvent = async (user) => {
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
        topic: 'Delete message',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Delete message');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};