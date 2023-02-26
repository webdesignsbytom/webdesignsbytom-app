import jwt from 'jsonwebtoken';
// Emitters
import { myEmitterUsers } from '../event/userEvents.js'
import { myEmitterErrors } from '../event/errorEvents.js'
import { findAllUsers } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';


export const getAllUsers = async (req, res) => {
  console.log('getting all users...');

  try {
    //
    const foundUsers = await findAllUsers();

    // Find all users
    if (foundUsers) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'User database'
      )
      myEmitterErrors.emit('error', notFound)
      return sendMessageResponse(res, notFound.code, notFound.message)
    }

    // Connect to eventEmitter
    myEmitterUsers.emit('get-all-users');
    return sendDataResponse(res, 200, { users: foundUsers })
    //
  } catch (error) {
    // Create error instance
    const serverError = new ServerErrorEvent(
      req.user,
      `get all users`
    )

    // Store error as event
    myEmitterErrors.emit('error', serverError)
    // Send error to client
    sendMessageResponse(res, serverError.code, serverError.message)
    throw err
  }
};
