import dbClient from '../utils/prisma.js';

export const findAllUsers = () => dbClient.user.findMany({});
