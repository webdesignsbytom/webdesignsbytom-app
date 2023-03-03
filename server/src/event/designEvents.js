import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllDesignsEvent,
  createCreateDesignEvent,
  createDeleteDesignEvent,
  createGetUserDesignEvent,
  createGetDesignByIdEvent,
} from './utils/designUtils.js';

export const myEmitterDesigns = myEmitter;

myEmitterDesigns.on('get-all-designs', async (user) =>
  createGetAllDesignsEvent(user)
);

myEmitterDesigns.on('create-design', async (user) =>
  createCreateDesignEvent(user)
);

myEmitterDesigns.on('deleted-design', async (user) =>
  createDeleteDesignEvent(user)
);

myEmitterDesigns.on('get-design-by-id', async (user) =>
  createGetDesignByIdEvent(user)
);

myEmitterDesigns.on('get-user-designs', async (user) =>
  createGetUserDesignEvent(user)
);
