import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllProjectsEvent,
  createCreateProjectEvent,
  createDeleteProjectEvent,
  createGetUserProjectEvent,
} from './utils/projectUtils.js';

export const myEmitterProjects = myEmitter;

myEmitterProjects.on('get-all-projects', async (user) =>
  createGetAllProjectsEvent(user)
);

myEmitterProjects.on('create-project', async (user) =>
  createCreateProjectEvent(user)
);

myEmitterProjects.on('deleted-project', async (user) =>
  createDeleteProjectEvent(user)
);

myEmitterProjects.on('get-user-projects', async (user) =>
  createGetUserProjectEvent(user)
);
