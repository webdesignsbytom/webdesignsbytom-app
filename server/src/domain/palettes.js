import dbClient from '../utils/dbClient.js';

export const findAllPalettes = () =>
  dbClient.colourPalette.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findPaletteByName = (name) =>
  dbClient.colourPalette.findFirst({
    where: { name: name },
  });

export const findPaletteById = (paletteId) =>
  dbClient.colourPalette.findFirst({
    where: { id: paletteId },
  });

export const findUserPalettesById = (userId) =>
  dbClient.colourPalette.findMany({
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
  dbClient.colourPalette.create({
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

export const createEmptyPalette = (designId) =>
  dbClient.colourPalette.create({
    data: {
      designId: designId
    }
  })

export const deletePaletteById = (paletteId) =>
  dbClient.palette.delete({
    where: {
      id: paletteId,
    },
  });
