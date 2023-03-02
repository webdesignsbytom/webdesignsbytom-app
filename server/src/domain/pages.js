import dbClient from '../utils/dbClient.js';

export const findAllPages = () => dbClient.page.findMany({});

export const findPageByName = (name) =>
  dbClient.page.findFirst({
    where: { name: name },
  });

export const createPage = (type, name, desc, price) =>
  dbClient.page.create({
    data: {
        type: type,
        name: name,
        desc: desc,
        price: price
    }
  })