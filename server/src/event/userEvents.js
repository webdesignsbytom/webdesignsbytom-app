import { myEmitter } from '../utils/eventEmitter.js';
import { createGetAllEvent, createRegisterEvent } from './utils/userUtils.js';

export const myEmitterUsers = myEmitter;

myEmitterUsers.on('get-all-users', async () => createGetAllEvent());

myEmitterUsers.on('register', async (user) => {
  createRegisterEvent(user);
});
