import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllPalettesEvent,
  createCreatePaletteEvent,
  createDeletePaletteEvent,
  createGetUserPaletteEvent,
  createGetPaletteByIdEvent,
} from './utils/paletteUtils.js';

export const myEmitterPalettes = myEmitter;

myEmitterPalettes.on('get-all-palettes', async (user) =>
  createGetAllPalettesEvent(user)
);

myEmitterPalettes.on('create-palette', async (user) =>
  createCreatePaletteEvent(user)
);

myEmitterPalettes.on('deleted-palette', async (user) =>
  createDeletePaletteEvent(user)
);

myEmitterPalettes.on('get-palette-by-id', async (user) =>
  createGetPaletteByIdEvent(user)
);

myEmitterPalettes.on('get-user-palettes', async (user) =>
  createGetUserPaletteEvent(user)
);
