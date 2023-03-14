import dbClient from '../utils/dbClient.js';

export const findAllComponents = () =>
  dbClient.component.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findComponentByName = (name) =>
  dbClient.component.findFirst({
    where: { name: name },
  });

export const findComponentById = (componentId) =>
  dbClient.component.findFirst({
    where: { id: componentId },
  });

export const findComponentByQuery = (query) =>
  dbClient.component.findFirst({
    where: {
      OR: [
        {
          id: {
            equals: query,
          },
        },
        {
          name: {
            equals: query,
          },
        },
      ],
    },
  });

export const createComponent = (type, name, desc, image, price) =>
  dbClient.component.create({
    data: {
      type: type,
      name: name,
      desc: desc,
      image: image,
      price: price,
    },
  });

export const deleteComponentById = (componentId) =>
  dbClient.component.delete({
    where: {
      id: componentId,
    },
  });
