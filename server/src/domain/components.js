import dbClient from '../utils/dbClient.js';

export const findAllComponents = () => dbClient.component.findMany({});

export const findComponentByName = (name) =>
  dbClient.component.findFirst({
    where: { name: name },
  });

export const findComponentById = (id) =>
  dbClient.component.findFirst({
    where: { id: id },
  });

export const createComponent = (type, name, desc, mainImage, price) =>
  dbClient.component.create({
    data: {
        type: type,
        name: name,
        desc: desc,
        mainImage: mainImage,
        price: price
    }
  })

export const deleteComponentById = (id) => 
  dbClient.component.delete({
    where: {
      id: id,
    }
  })
