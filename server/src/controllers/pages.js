import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterPages } from '../event/pageEvents.js';
import { findAllPages } from '../domain/pages.js';
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
