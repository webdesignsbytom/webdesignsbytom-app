import { myEmitter } from '../utils/eventEmitter.js';
import { createErrorEvent, createLoginErrorEvent } from './utils/errorUtils.js'

export const myEmitterErrors = myEmitter

myEmitterErrors.on('error', async (error) => {
  console.log('ERROR EVENT', error);
  createErrorEvent(error)
});

myEmitterErrors.on('error-login', async (error) => {
  console.log('ERROR EVENT LOGIN', error);
  createLoginErrorEvent(error)
});
