import dbClient from '../utils/dbClient.js';

export const findAllUsers = () => dbClient.user.findMany({})