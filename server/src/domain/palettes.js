import dbClient from '../utils/dbClient.js';

export const findAllPalettes = () =>
  dbClient.palette.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findPaletteByName = (name) =>
  dbClient.palette.findFirst({
    where: { name: name },
  });

export const findPaletteById = (paletteId) =>
  dbClient.palette.findFirst({
    where: { id: paletteId },
  });

export const findUserPalettesById = (userId) =>
  dbClient.palette.findMany({
    where: { userId: userId },
  });

export const createPalette = (
  designId,
  bgMain,
  bgAlt,
  paletteOne,
  paletteTwo,
  paletteThree,
  hover,
  selected
) =>
  dbClient.palette.create({
    data: {
      designId: designId,
      bgMain: bgMain,
      bgAlt: bgAlt,
      paletteOne: paletteOne,
      paletteTwo: paletteTwo,
      paletteThree: paletteThree,
      hover: hover,
      selected: selected,
    },
  });

export const deletePaletteById = (paletteId) =>
  dbClient.palette.delete({
    where: {
      id: paletteId,
    },
  });
