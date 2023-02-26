import EventEmitter from 'events'
import {
} from './utils.js'

class MyEventEmitter extends EventEmitter {}
export const myEmitter = new MyEventEmitter()

// New User
myEmitter.on('register', (user) => createRegisterEvent(user))

// Update User
myEmitter.on('update-email', (user, oldEmail) =>
  createUpdateEmailEvent(user, oldEmail)
)
myEmitter.on('update-account-verification', (user, admin = null) =>
  createUpdateVerificationEvent(user, (admin = null))
)
myEmitter.on('update-role', (assignee, oldRole, assigner) =>
  createUpdateRoleEvent(assignee, oldRole, assigner)
)

// Error handling
myEmitter.on('error', (error) => createErrorEvent(error))
