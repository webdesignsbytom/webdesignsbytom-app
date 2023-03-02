import dbClient from '../utils/dbClient.js';

export const findAllComponents = () => dbClient.component.findMany({});