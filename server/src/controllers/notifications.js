// Emitters
import { myEmitterNotifications } from '../event/notificationEvents.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  findAllNotifications,
  createNewNotification,
  findNotificationsByUserId,
  updateNotificationById,
  findNotificationById,
  deleteNotificationById,
  findViewedNotifications,
} from '../domain/notifications.js';
// Response messages
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  RegistrationServerErrorEvent,
} from '../event/utils/errorUtils.js';
import { findUserById } from '../domain/users.js';

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

    foundNotifications.forEach((note, index) => {
      const date = note.createdAt.toLocaleString();
      note.createdAt = date;
    });

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
  console.log('getNotificationsByUserId');
  const userId = req.params.userId;
  console.log('userId', userId);

  try {
    // Find all notifications
    const foundNotifications = await findNotificationsByUserId(userId);

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

    foundNotifications.forEach((note, index) => {
      const date = note.createdAt.toLocaleString();
      note.createdAt = date;
    });

    myEmitterNotifications.emit('get-notifications-for-user', req.user);
    return sendDataResponse(res, 200, { notifications: foundNotifications });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get notifications for user`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getViewedNotificationsByUserId = async (req, res) => {
  const userId = req.params.userId;

  var bool = req.params.viewed;
  var value = JSON.parse(bool);

  try {
    const foundUser = await findUserById(userId);

    if (!foundUser) {
      return sendDataResponse(res, 404, {
        notification: 'User not found in database',
      });
    }

    const foundNotifications = await findViewedNotifications(userId, value);

    foundNotifications.forEach((note, index) => {
      const date = note.createdAt.toLocaleString();
      note.createdAt = date;
    });

    if (!foundNotifications) {
      return sendDataResponse(res, 404, {
        notification: 'User notifications not found in database',
      });
    }

    myEmitterNotifications.emit('get-notifications-for-user', req.user);
    return sendDataResponse(res, 200, { notifications: foundNotifications });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get viewed User notifications`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
export const createNotification = async (req, res) => {
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

    // myEmitterNotifications.emit('create-notification', createdNotification);

    return sendDataResponse(res, 201, { createdNotification });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new notification`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const setNotificationToViewed = async (req, res) => {
  console.log('setNotificationToView');
  const { notificationId } = req.params;
  console.log('notificationId', notificationId);

  try {
    const foundNotification = await findNotificationById(notificationId);
    console.log('foundNotification', foundNotification);
    // If no found notifications
    if (!foundNotification) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.notification,
        'Not found event',
        'Cant find notification by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedNotification = await updateNotificationById(notificationId);
    console.log('updated notification', updatedNotification);

    // myEmitterNotifications.emit('viewed-notification', req.notification);
    return sendDataResponse(res, 200, { notification: updatedNotification });
  } catch (err) {
    // Create error instance
    const serverError = new ServerErrorEvent(
      `Viewed Notification Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteNotification = async (req, res) => {
  console.log('deleteNotification');
  const id = req.params.notificationId;
  console.log(id);

  try {
    const foundNotification = await findNotificationById(id);
    console.log('foundNotification', foundNotification);
    // If no found notifications
    if (!foundNotification) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.notification,
        'Not found event',
        'Cant find notification by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteNotificationById(id);
    // myEmitterNotifications.emit('deleted-notification', req.user);
    return sendDataResponse(res, 200, {
      notification: foundNotification,
      message: `Notification ${foundNotification.name} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete notification`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
