import dbClient from '../utils/dbClient.js';

export const findAllNotifications = () => dbClient.event.findMany({});