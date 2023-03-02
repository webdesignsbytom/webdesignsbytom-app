import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllNotificationsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Get all notifications',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all notifications');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateNotificationsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Create notifications',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all notifications');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createViewedNotificationsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Viewed notifications',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all notifications');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteNotificationsEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'DEVELOPER',
        topic: 'Delete notifications',
        content: `Success`,
        createdById: user.id,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Deleted notifications');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};
