import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllReviewsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all reviews',
        content: `Success`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all reviews');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateReviewEvent = async (user) => {
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
        topic: 'Create review',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Create review');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteReviewEvent = async (user) => {
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
        topic: 'Delete review',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Delete review');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetReviewByIdEvent = async (user) => {
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
        topic: 'get review',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'get review');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createGetUserReviewEvent = async (user) => {
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
        topic: 'Get user reviews',
        createdById: user.id,
        createdAt: user.createdAt,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get user reviews');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};