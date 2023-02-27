import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllEvent = async () => {
  await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Get all users',
    },
  });
};

export const createRegisterEvent = async (user) => {
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
        topic: 'Register',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Register');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createVerifyEvent = async (user) => {
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
        topic: 'Verify',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Verify');
    myEmitterErrors.emit('error', error);
    throw err;
  }
}

