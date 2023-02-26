import { myEmitter } from '../utils/eventEmitter.js';
import { createErrorEvent } from './utils/errorUtils.js'

export const myEmitterErrors = myEmitter

myEmitterErrors.on('error', async (error) => {
  console.log('ERRRRRROR EVEENEENNET');
  createErrorEvent(error)
});
