import { myEmitter } from '../utils/eventEmitter.js';
import { createGetAllEvent } from './utils/userUtils.js'

export const myEmitterUsers = myEmitter

myEmitterUsers.on('get-all-users', async () => {
  console.log('EVEENEENNET');
  createGetAllEvent()
});
