import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllMessagesEvent,
  createCreateMessageEvent,
  createDeleteMessageEvent,
} from './utils/messageUtils.js';

export const myEmitterMessages = myEmitter;

myEmitterMessages.on('get-all-messages', async (user) =>
  createGetAllMessagesEvent(user)
);

myEmitterMessages.on('create-message', async (user) => createCreateMessageEvent(user));

myEmitterMessages.on('deleted-message', async (user) =>
  createDeleteMessageEvent(user)
);
