// Emitters
import { myEmitterNotifications } from '../event/notificationEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { findAllNotifications } from '../domain/notifications.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllNotifications = async (req, res) => {
  console.log('get all notifications');
  try {
    // Find all notifications
    const foundNotifications = await findAllNotifications();

    // If no found notifications
    if (!foundNotifications) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found notifications',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    myEmitterNotifications.emit('get-all-notifications', req.user);
    return sendDataResponse(res, 200, { notifications: foundNotifications });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all notifications`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
