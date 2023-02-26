import dbClient from '../../utils/prisma.js';

export const getAllUsersEvent = async (user) => {
  console.log('user:', user);
    try {
    await dbClient.event.create({
      data: {
        type: 'ADMIN',
        topic: 'get-all-users',
      }
    })
  } catch (err) {
    console.log('error creating event', err);
    throw err
  }
}

