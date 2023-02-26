import jwt from 'jsonwebtoken';
// Emitters
import { myEmitterUsers } from '../event/userEvents.js'
import { myEmitterErrors } from '../event/errorEvents.js'
import { findAllUsers } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { NotFoundEvent } from '../event/utils/errorUtils.js';


export const getAllUsers = async (req, res) => {
  console.log('getting all users...');

  try {
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      myEmitterErrors.emit('error')
      return res.status(404).json({
        status: `404 Not Found`,
        message: `No users were found`,
        code: `404`,
      });
    }

    if (foundUsers.length === 2) {
      const notFound = new NotFoundEvent(
        'Bastards',
        'They got throught the walls'
      )
      myEmitterErrors.emit('error', notFound)
      return res.status(403).json({
        message: `Database is currently empty and no users were found`,
      });
    }

    // Connect to eventEmitter
    myEmitterUsers.emit('get-all-users');

    return res.status(201).json({
      message: `Found ${foundUsers.length} users`,
      code: `201`,
      data: foundUsers,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};
