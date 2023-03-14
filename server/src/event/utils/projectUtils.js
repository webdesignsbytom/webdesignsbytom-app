import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllProjectsEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Get all projects not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get all projects',
        content: `Get all projects successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get all projects');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateProjectEvent = async (user) => {
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
        topic: 'Create project',
        content: `Create project successful for ${user.email}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Create project');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};


export const createGetProjectByIdEvent = async (user) => {
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
        topic: 'Get project by ID',
        content: `Get project by ID successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'get project');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetUserProjectEvent = async (user) => {
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
        topic: 'Get user projects',
        content: `Get projects from user successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get user projects');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};


export const createDeleteProjectEvent = async (user) => {
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
        topic: 'Delete project',
        content: `Delete project successful for ${user.email}`,
        createdById: user.id,
        code: 204
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete project');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};