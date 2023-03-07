// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterPalettes } from '../event/paletteEvents.js';
import {
  findAllPalettes,
  findPaletteByName,
  createPalette,
  findPaletteById,
  deletePaletteById,
  findUserPalettesById,
} from '../domain/palettes.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  BadRequestEvent
} from '../event/utils/errorUtils.js';

export const getAllPalettes = async (req, res) => {
  console.log('get all palettes');
  try {
    const foundPalettes = await findAllPalettes();

    if (!foundPalettes) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found palettes',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterPalettes.emit('get-all-palettes', req.user);
    return sendDataResponse(res, 200, { palettes: foundPalettes });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPaletteById = async (req, res) => {
  console.log('getPaletteById');
  const paletteId = req.params.paletteId

  try {
    const foundPalette = await findPaletteById(paletteId);
    if (!foundPalette) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find palette by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterPalettes.emit('get-palette-by-id', req.user)
    return sendDataResponse(res, 200, { palette: foundPalette });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get palette by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPalettesFromUser = async (req, res) => {
  console.log('get user id palettes');
  const userId = req.params.userId;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find user by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    const foundPalettes = await findUserPalettesById(userId);

    if (!foundPalettes) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found Event',
        'Palette database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    myEmitterPalettes.emit('get-user-palettes', req.user);
    return sendDataResponse(res, 200, { user: foundPalettes });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user palettes by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewPalette = async (req, res) => {
  console.log('createNewPalette');
  const { designId, bgMain, bgAlt, paletteOne, paletteTwo, paletteThree, hover, selected } = req.body;
  try {
    if (!req.body) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Palette creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found Event',
        'User database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdPalette = await createPalette(designId, bgMain, bgAlt, paletteOne, paletteTwo, paletteThree, hover, selected);

    if (!createdPalette) {
      const badRequest = new BadRequestEvent(
        req.user,
        'Bad request',
        'Palette database'
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }
    
    // myEmitterPalettes.emit('create-palette', createdPalette);
    return sendDataResponse(res, 201, { createdPalette });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new palette`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deletePalette = async (req, res) => {
  console.log('deletePalette');
  const paletteId = req.params.paletteId

  try {
    const foundPalette = await findPaletteById(paletteId);

    if (!foundPalette) {
      const notFound = new NotFoundEvent(
        req.user,
        'Not found palette',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deletePaletteById(id);
    myEmitterPalettes.emit('deleted-palette', req.user);
    return sendDataResponse(res, 200, {
      palette: foundPalette,
      message: `Palette ${foundPalette.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete palette`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
