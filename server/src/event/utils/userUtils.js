import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'ADMIN',
        topic: 'Get all users',
        content: `Success ${user.email}`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all users');
    myEmitterErrors.emit('error', error);
    throw err;
  }
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
};
export const createNewVerifyEvent = async (user) => {
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
        topic: 'Verify-resend',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Verify-resend');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};
