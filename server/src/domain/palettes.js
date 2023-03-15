import dbClient from '../utils/dbClient.js';

export const findAllPalettes = () =>
  dbClient.colorPalette.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findPaletteByName = (name) =>
  dbClient.colorPalette.findFirst({
    where: { name: name },
  });

export const findPaletteById = (paletteId) =>
  dbClient.colorPalette.findFirst({
    where: { id: paletteId },
  });

export const findUserPalettesById = (userId) =>
  dbClient.colorPalette.findMany({
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
  dbClient.colorPalette.create({
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
  dbClient.colorPalette.create({
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
