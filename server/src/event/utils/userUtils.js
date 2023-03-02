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
        code: 200
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
        code: 200
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
        code: 200
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
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Verify-resend');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createPasswordResetEvent = async (user) => {
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
        topic: 'Reset-password',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Reset-password');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createUpdateUserEvent = async (user) => {
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
        topic: 'updated-user',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Deleted-user');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteUserEvent = async (user) => {
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
        topic: 'Deleted-user',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Deleted-user');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};
