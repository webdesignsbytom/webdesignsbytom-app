import { myEmitter } from '../utils/eventEmitter.js';
import {
    createGetAllComponentsEvent,
} from './utils/componentUtils.js';

export const myEmitterComponents = myEmitter;

myEmitterComponents.on('get-all-components', async (user) => createGetAllComponentsEvent(user));
