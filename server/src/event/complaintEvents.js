import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllComplaintsEvent,
  createCreateComplaintEvent,
  createDeleteComplaintEvent,
  createGetUserComplaintEvent,
  createGetComplaintByIdEvent,
} from './utils/complaintUtils.js';

export const myEmitterComplaints = myEmitter;

myEmitterComplaints.on('get-all-complaints', async (user) =>
  createGetAllComplaintsEvent(user)
);

myEmitterComplaints.on('create-complaint', async (user) =>
  createCreateComplaintEvent(user)
);

myEmitterComplaints.on('deleted-complaint', async (user) =>
  createDeleteComplaintEvent(user)
);

myEmitterComplaints.on('get-complaint-by-id', async (user) =>
  createGetComplaintByIdEvent(user)
);

myEmitterComplaints.on('get-user-complaints', async (user) =>
  createGetUserComplaintEvent(user)
);
