import { myEmitter } from '../utils/eventEmitter.js';
import {
  createRegisterEvent,
  createUpdateEmailEvent,
  createUpdateRoleEvent,
} from './utils/userUtils.js';

// New User
myEmitter.on('register', (user) => createRegisterEvent(user));

// Update User
myEmitter.on('update-email', (user, oldEmail) =>
  createUpdateEmailEvent(user, oldEmail)
);
myEmitter.on('update-account-verification', (user, admin = null) =>
  createUpdateVerificationEvent(user, (admin = null))
);
myEmitter.on('update-role', (assignee, oldRole, assigner) =>
  createUpdateRoleEvent(assignee, oldRole, assigner)
);

// Delete User

// Error handling
myEmitter.on('error', (error) => createErrorEvent(error));
