import dbClient from '../utils/dbClient.js';

export const findAllPages = () => dbClient.page.findMany({});