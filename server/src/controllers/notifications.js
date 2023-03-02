// Emitters
import { myEmitterNotifications } from '../event/notificationEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { findAllNotifications, createNewNotification, findNotificationsByUserId } from '../domain/notifications.js';
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

export const getNotificationsByUserId = async (req, res) => {
  console.log('getNotificationsByUserId')
  const userId = req.params.userId;
  console.log('userId', userId)

  try {
    // Find all notifications
    const foundNotifications = await findNotificationsByUserId();

    // If no found notifications
    if (!foundNotifications) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        `Not found notifications for user ${userId}`,
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    myEmitterNotifications.emit('get-notifications-for-user', req.user);
    return sendDataResponse(res, 200, { notifications: foundNotifications });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get notifications for user`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
}

export const createNotification = async (req, res) => {
  console.log('create notification')
  const { type, content, userId } = req.body;
  console.log(type, content, userId);

  try {
    if (!type || !content || !userId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Notification creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const createdNotification = await createNewNotification(
      type,
      content,
      userId
    );
    console.log('created notification', createdNotification);

    // myEmitterNotifications.emit('create-notification', createdNotification);

    return sendDataResponse(res, 201, { createdNotification });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new notification`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
}
