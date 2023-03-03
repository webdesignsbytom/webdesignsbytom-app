import dbClient from '../utils/dbClient.js';

export const findAllDesigns = () => dbClient.design.findMany({});

export const findDesignByName = (name) =>
  dbClient.design.findFirst({
    where: { name: name },
  });

export const findDesignById = (id) =>
  dbClient.design.findFirst({
    where: { id: id },
  });

export const findUserDesignsById = (id) =>
  dbClient.design.findMany({
    where: { userId: id },
  });

export const createDesign = (userId, name, colorPalette) =>
  dbClient.design.create({
    data: {
      userId: userId,
      name: name,
      colorPalette: colorPalette
    },
  });

export const deleteDesignById = (id) =>
  dbClient.design.delete({
    where: {
      id: id,
    },
  });
