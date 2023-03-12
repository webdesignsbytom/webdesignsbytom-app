import dbClient from '../utils/dbClient.js';

export const findAllEvents = () =>
  dbClient.event.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
