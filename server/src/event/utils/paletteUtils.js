import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllPalettesEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all palettes',
        content: `Success`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all palettes');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreatePaletteEvent = async (user) => {
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
        topic: 'Create palette',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Create palette');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeletePaletteEvent = async (user) => {
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
        topic: 'Delete palette',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Delete palette');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetPaletteByIdEvent = async (user) => {
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
        topic: 'get palette',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'get palette');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetUserPaletteEvent = async (user) => {
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
        topic: 'Get user palettes',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get user palettes');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};