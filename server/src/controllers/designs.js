// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterDesigns } from '../event/designEvents.js';
import {
  findAllDesigns,
  findDesignByName,
  createDesign,
  findDesignById,
  deleteDesignById,
  findUserDesignsById,
} from '../domain/designs.js';
import { findUserById } from '../domain/users.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllDesigns = async (req, res) => {
  console.log('get all designs');
  try {
    // Find all designs
    const foundDesigns = await findAllDesigns();

    // If no found designs
    if (!foundDesigns) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found designs',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterDesigns.emit('get-all-designs', req.user);
    return sendDataResponse(res, 200, { designs: foundDesigns });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getDesignById = async (req, res) => {
  console.log('USer by ID req', req.user);
  console.log('req.params', req.params);
  const designId = Number(req.params.designId)

  try {
    console.log('test');
    const foundDesign = await findDesignById(designId);
    console.log('foundDesign', foundDesign);
    // If no found designs
    if (!foundDesign) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find design by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterDesigns.emit('get-design-by-id', req.user)
    return sendDataResponse(res, 200, { design: foundDesign });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get design by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getDesignsFromUser = async (req, res) => {
  console.log('get user id design');
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
    const foundDesigns = await findUserDesignsById(userId);
    console.log('foundDesigns', foundDesigns);
    // If no found users

    myEmitterDesigns.emit('get-user-designs', req.user);
    return sendDataResponse(res, 200, { user: foundDesigns });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user designs by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewDesign = async (req, res) => {
  console.log('createNewDesign');
  const { userId, name, colorPalette } = req.body;
  console.log(req.body);
  try {
    if (!req.body) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Design creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    console.log('XXXX');

    const foundDesign = await findDesignByName(name);
    console.log('found design', foundDesign);

    if (foundDesign) {
      return sendDataResponse(res, 400, { design: 'Design name already exists' });
    }

    const foundUser = await findUserById(userId);
    console.log('found user', foundUser);

    const createdDesign = await createDesign(userId, name, colorPalette);
    console.log('created design', createdDesign);

    // myEmitterDesigns.emit('create-design', createdDesign);

    return sendDataResponse(res, 201, { createdDesign });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new design`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteDesign = async (req, res) => {
  console.log('deleteDesign');
  const id = Number(req.params.id);
  console.log(id);

  try {
    const foundDesign = await findDesignById(id);
    console.log('foundDesign', foundDesign);

    if (!foundDesign) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found design',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteDesignById(id);
    myEmitterDesigns.emit('deleted-design', req.user);
    return sendDataResponse(res, 200, {
      design: foundDesign,
      message: `Design ${foundDesign.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete design`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
