import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllContactsEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Get all contact forms not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get all contacts',
        content: `Get all contact forms successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get all contacts');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateContactEvent = async (user) => {
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
        topic: 'Create contact form',
        content: `Create contact form successful for ${user.email}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Create contact form');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteContactEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Delete contact form not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Delete contact form',
        content: `Delete contact form successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete contact form');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};