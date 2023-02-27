import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllEvent,
  createRegisterEvent,
  createVerifyEvent,
  createNewVerifyEvent
} from './utils/userUtils.js';

export const myEmitterUsers = myEmitter;

myEmitterUsers.on('get-all-users', async (user) => createGetAllEvent(user));

myEmitterUsers.on('register', async (user) => {
  createRegisterEvent(user);
});

myEmitterUsers.on('verified', async (user) => {
  createVerifyEvent(user);
});
myEmitterUsers.on('resend-verification', async (user) => {
  createNewVerifyEvent(user);
});
