// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterComponents } from '../event/componentEvents.js';
import { findAllComponents } from '../domain/components.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllComponents = async (req, res) => {
  console.log('get all components');
  try {
    // Find all components
    const foundComponents = await findAllComponents();

    // If no found components
    if (!foundComponents) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found components',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComponents.emit('get-all-components', req.user);
    return sendDataResponse(res, 200, { components: foundComponents });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
