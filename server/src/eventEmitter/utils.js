import dbClient from '../utils/dbClient.js'
import { myEmitter } from './index.js'
import { CreateEventError } from './errors.js'

export const createRegisterEvent = async (user) => {
  let type = 'USER'
  if (user.role === 'ADMIN') {
    type = 'ADMIN'
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'register',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'register')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createUpdateEmailEvent = async (user, oldEmail) => {
  let type = 'USER'
  if (user.role === 'ADMIN') {
    type = 'ADMIN'
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'update-email-address',
        content: `from ${oldEmail} to ${user.email}`,
        receivedById: user.id,
        createdAt: user.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'update-email')
    myEmitter.emit('error', error)
    throw err
  }
}

// VERIFICATION
// export const createUpdateActivateEvent = async (user) => {
//   let type = 'USER'
//   let topic = ''
//   if (user.role === 'ADMIN') {
//     type = 'ADMIN'
//   }
//   if (user.isActive) {
//     topic = 'activate-account'
//   } else {
//     topic = 'deactivate-account'
//   }

//   try {
//     await dbClient.event.create({
//       data: {
//         type: type,
//         topic: topic,
//         receivedById: user.id,
//         createdAt: user.updatedAt
//       }
//     })
//   } catch (err) {
//     const error = new CreateEventError(user, 'update-account-activate')
//     myEmitter.emit('error', error)
//     throw err
//   }
// }

export const createUpdateRoleEvent = async (assignee, oldRole, assigner) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'ADMIN',
        topic: 'update-role',
        content: `from ${oldRole} to ${assignee.role}`,
        createdById: assigner.id,
        receivedById: assignee.id,
        createdAt: assignee.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(assigner, 'update-role')
    myEmitter.emit('error', error)
    throw err
  }
}
