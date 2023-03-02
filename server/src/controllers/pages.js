import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterPages } from '../event/pageEvents.js';
import { findAllPages, findPageByName, createPage } from '../domain/pages.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllPages = async (req, res) => {
  console.log('get all pages');
  try {
    // Find all pages
    const foundPages = await findAllPages();

    // If no found pages
    if (!foundPages) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found pages',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterPages.emit('get-all-pages', req.user);
    return sendDataResponse(res, 200, { pages: foundPages });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewPage = async (req, res) => {
  console.log('createNewPage');
  const { type, name, desc, price } = req.body;
  console.log(req.body);
  try {
    if (!type || !name || !desc || !price) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Page creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundPage = await findPageByName(name);
    console.log('found page', foundPage)

    if (foundPage) {
      return sendDataResponse(res, 400, { page: 'Page name already exists' });
    }

    const createdPage = await createPage(type, name, desc, price)
    console.log('created page', createdPage)

    // myEmitterPages.emit('create-page', createdPage);

    return sendDataResponse(res, 201, { createdUser });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new page`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
