import { myEmitter } from '../utils/eventEmitter.js';
import {
    createGetAllPagesEvent,
} from './utils/pageUtils.js';

export const myEmitterPages = myEmitter;

myEmitterPages.on('get-all-pages', async (user) => createGetAllPagesEvent(user));
