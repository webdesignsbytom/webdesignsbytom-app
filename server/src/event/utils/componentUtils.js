import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllComponentsEvent = async (user) => {
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
        topic: 'Get all components',
        content: `Get all components successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get all components');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateComponentEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Create component not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Create component',
        content: `Create component successful for ${user.email}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Create component');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteComponentEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Delete component not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Delete component',
        content: `Delete component successful for ${user.email}`,
        createdById: user.id,
        code: 204
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete component');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};