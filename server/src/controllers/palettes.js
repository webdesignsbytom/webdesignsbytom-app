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
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllPalettes = async (req, res) => {
  console.log('get all palettes');
  try {
    // Find all palettes
    const foundPalettes = await findAllPalettes();

    // If no found palettes
    if (!foundPalettes) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found palettes',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
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
  console.log('USer by ID req', req.user);
  console.log('req.params', req.params);
  const paletteId = Number(req.params.paletteId)

  try {
    console.log('test');
    const foundPalette = await findPaletteById(paletteId);
    console.log('foundPalette', foundPalette);
    // If no found palettes
    if (!foundPalette) {
      // Create error instance
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
    //
    const serverError = new ServerErrorEvent(req.user, `Get palette by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPalettesFromUser = async (req, res) => {
  console.log('get user id palette');
  const userId = req.params.userId;
  console.log('useeId', userId);

  try {
    console.log('test');
    const foundUser = await findUserById(userId);
    console.log('foundUser', foundUser);
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
    console.log('foundPalettes', foundPalettes);
    // If no found users

    myEmitterPalettes.emit('get-user-palettes', req.user);
    return sendDataResponse(res, 200, { user: foundPalettes });
  } catch (err) {
    //
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
  console.log(req.body);
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
    console.log('XXXX');

    const foundUser = await findUserById(userId);
    console.log('found user', foundUser);

    const createdPalette = await createPalette(designId, bgMain, bgAlt, paletteOne, paletteTwo, paletteThree, hover, selected);
    console.log('created palette', createdPalette);

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
  const id = Number(req.params.id);
  console.log(id);

  try {
    const foundPalette = await findPaletteById(id);
    console.log('foundPalette', foundPalette);

    if (!foundPalette) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found palette',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
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
