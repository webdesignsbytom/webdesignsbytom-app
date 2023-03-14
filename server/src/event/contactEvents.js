import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllContactsEvent,
  createCreateContactEvent,
  createDeleteContactEvent,
} from './utils/contactUtils.js';

export const myEmitterContacts = myEmitter;

myEmitterContacts.on('get-all-contacts', async (user) =>
  createGetAllContactsEvent(user)
);

myEmitterContacts.on('create-contact', async (createdContact) =>
  createCreateContactEvent(createdContact)
);

myEmitterContacts.on('deleted-contact', async (user) =>
  createDeleteContactEvent(user)
);
