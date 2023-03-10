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
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  BadRequestEvent
} from '../event/utils/errorUtils.js';
import { findUserById } from '../domain/users.js';

export const getAllNotifications = async (req, res) => {
  console.log('get all notifications');
  try {
    const foundNotifications = await findAllNotifications();

    if (!foundNotifications) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notificationTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundNotifications.forEach((note, index) => {
      const createdDate = note.createdAt.toLocaleString();
      const updatedDate = note.updatedAt.toLocaleString();
      note.createdAt = createdDate;
      note.updatedAt = updatedDate;
    });

    // myEmitterNotifications.emit('get-all-notifications', req.user);
    return sendDataResponse(res, 200, { notifications: foundNotifications });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all notifications`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getNotificationsByUserId = async (req, res) => {
  console.log('getNotificationsByUserId');
  const userId = req.params.userId;

  try {
    const foundNotifications = await findNotificationsByUserId(userId);

    if (!foundNotifications) {
      const notFound = new NotFoundEvent(
        req.user,
        `Not found notifications for user ${userId}`,
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundNotifications.forEach((note, index) => {
      const createdDate = note.createdAt.toLocaleString();
      const updatedDate = note.updatedAt.toLocaleString();
      note.createdAt = createdDate;
      note.updatedAt = updatedDate;
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
        notification: EVENT_MESSAGES.userNotFound,
      });
    }

    const foundNotifications = await findViewedNotifications(userId, value);

    foundNotifications.forEach((note, index) => {
      const createdDate = note.createdAt.toLocaleString();
      const updatedDate = note.updatedAt.toLocaleString();
      note.createdAt = createdDate;
      note.updatedAt = updatedDate;
    });

    if (!foundNotifications) {
      return sendDataResponse(res, 404, {
        notification: EVENT_MESSAGES.userNotificationsNotFound,
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
  console.log('createNotification')
  const { type, content, userId } = req.body;

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

    if (!createdNotification) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createNotificationFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    // myEmitterNotifications.emit('create-notification', createdNotification);
    return sendDataResponse(res, 201, { createdNotification });
  } catch (err) {
    // Error
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
  const notificationId = req.params.notificationId;

  try {
    const foundNotification = await findNotificationById(notificationId);
    if (!foundNotification) {
      const notFound = new NotFoundEvent(
        req.notification,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notificationIdNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedNotification = await updateNotificationById(notificationId);

    if (!updatedNotification) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.markNotificationViewedFailed
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

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
  const notificationId = req.params.notificationId;

  try {
    const foundNotification = await findNotificationById(notificationId);
    if (!foundNotification) {
      const notFound = new NotFoundEvent(
        req.notification,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notificationIdNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteNotificationById(notificationId);
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
