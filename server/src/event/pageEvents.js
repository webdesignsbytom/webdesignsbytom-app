import { myEmitter } from '../utils/eventEmitter.js';
import {
    createGetAllPagesEvent, createCreatePageEvent
} from './utils/pageUtils.js';

export const myEmitterPages = myEmitter;

myEmitterPages.on('get-all-pages', async (user) => createGetAllPagesEvent(user));

myEmitterPages.on('create-page', async (user) => createCreatePageEvent(user));
