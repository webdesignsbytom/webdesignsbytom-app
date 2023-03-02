import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllPagesEvent,
  createCreatePageEvent,
  createDeletePageEvent,
} from './utils/pageUtils.js';

export const myEmitterPages = myEmitter;

myEmitterPages.on('get-all-pages', async (user) =>
  createGetAllPagesEvent(user)
);

myEmitterPages.on('create-page', async (user) => createCreatePageEvent(user));

myEmitterPages.on('deleted-page', async (user) =>
  createDeletePageEvent(user)
);
