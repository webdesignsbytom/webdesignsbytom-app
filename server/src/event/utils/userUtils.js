import dbClient from '../../utils/dbClient.js';

export const createGetAllEvent = async () => {
  await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Get all users'
    },
  });
};
