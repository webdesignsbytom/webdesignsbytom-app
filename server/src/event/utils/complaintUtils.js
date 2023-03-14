import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError, NoPermissionEvent } from './errorUtils.js';

export const createGetAllComplaintsEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Get all complaints not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get all complaints',
        content: `Get all complaints successful for ${user.email}`,
        createdById: user.id,
        code: 200,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get all complaints');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateComplaintEvent = async (user) => {
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
        topic: 'Complaint created',
        content: `Create complaint successful for ${user.email}`,
        createdById: user.id,
        code: 201,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Create complaint');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetComplaintByIdEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Get complaint by ID not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get complaint by ID',
        content: `Get complaint by ID successful for ${user.email}`,
        createdById: user.id,
        code: 200,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get complaint by ID');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetUserComplaintEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Get complaint by user not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get complaints by user',
        content: `Get complaint by user successful for ${user.email}`,
        createdById: user.id,
        code: 200,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get complaint by user');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteComplaintEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Delete complaint not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Delete complaint',
        content: `Delete complaint successful for ${user.email}`,
        createdById: user.id,
        code: 204,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete complaint');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};