import dbClient from '../utils/dbClient.js';

export const findAllPalettes = () => dbClient.palette.findMany({});

export const findPaletteByName = (name) =>
  dbClient.palette.findFirst({
    where: { name: name },
  });

export const findPaletteById = (id) =>
  dbClient.palette.findFirst({
    where: { id: id },
  });

export const findUserPalettesById = (id) =>
  dbClient.palette.findMany({
    where: { userId: id },
  });

export const createPalette = (designId, bgMain, bgAlt, paletteOne, paletteTwo, paletteThree, hover, selected) =>
  dbClient.palette.create({
    data: {
      designId: designId,
      bgMain: bgMain,
      bgAlt: bgAlt,
      paletteOne: paletteOne,
      paletteTwo: paletteTwo,
      paletteThree: paletteThree,
      hover: hover,
      selected: selected
    },
  });

export const deletePaletteById = (id) =>
  dbClient.palette.delete({
    where: {
      id: id,
    },
  });
