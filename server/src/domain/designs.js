import dbClient from '../utils/dbClient.js';

export const findAllDesigns = () => dbClient.design.findMany({});

export const findDesignByName = (name) =>
  dbClient.design.findFirst({
    where: { name: name },
  });

export const findDesignById = (designId) =>
  dbClient.design.findFirst({
    where: { id: designId },
  });

export const findUserDesignsById = (userId) =>
  dbClient.design.findMany({
    where: { userId: userId },
  });

export const createDesign = (userId, name, colorPalette) =>
  dbClient.design.create({
    data: {
      userId: userId,
      name: name,
      colorPalette: colorPalette
    },
  });

export const deleteDesignById = (designId) =>
  dbClient.design.delete({
    where: {
      id: designId,
    },
  });
