import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterMessages } from '../event/messageEvents.js';
import {
  findAllMessages,
  createMessage,
  findMessageById,
  deleteMessageById,
  findUserMessagesById,
  updateMessageToViewed
} from '../domain/messages.js';
// Response messages
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
  BadRequestEvent
} from '../event/utils/errorUtils.js';
import { findUserById } from '../domain/users.js';

export const getAllMessages = async (req, res) => {
  console.log('get all messages');
  try {
    const foundMessages = await findAllMessages();

    if (!foundMessages) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.messageTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterMessages.emit('get-all-messages', req.user);
    return sendDataResponse(res, 200, { messages: foundMessages });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all messages`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getMessageById = async (req, res) => {
  console.log('getMessageById');
  const messageId = req.params.messageId

  try {
    const foundMessage = await findMessageById(messageId);
    if (!foundMessage) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.messageNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterMessages.emit('get-message-by-id', req.user)
    return sendDataResponse(res, 200, { message: foundMessage });
  } catch (err) {
    const serverError = new ServerErrorEvent(req.user, `Get message by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewMessage = async (req, res) => {
  console.log('createNewMessage');
  const { subject, content, sentFromId, userId } = req.body;

  try {
    if (!subject || !content || !sentFromId || !userId) {
      const missingField = new MissingFieldEvent(
        null,
        'Message creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserById(userId);

    if (!foundUser) {
      return sendDataResponse(res, 400, { message: 'Recipient not found in database' });
    }

    const createdMessage = await createMessage(subject, content, sentFromId, userId);
    console.log('created message', createdMessage);

    // myEmitterMessages.emit('create-message', createdMessage);
    return sendDataResponse(res, 201, { createdMessage });
  } catch (err) {
    const serverError = new ServerErrorEvent(req.user, `Create new message`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getMessagesFromUser = async (req, res) => {
  console.log('get user messages');
  const userId = req.params.userId;

  try {
    const foundUser = await findUserById(userId);
    if (!foundUser) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.userNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }
    console.log('XXX foundUser', foundUser)
    const foundMessages = await findUserMessagesById(foundUser.id);
    console.log('foundMessages', foundMessages);

    if (!foundMessages) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        `No found messages for user ${userId}`
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    myEmitterMessages.emit('get-user-messages', req.user);
    return sendDataResponse(res, 200, { messages: foundMessages });
  } catch (err) {
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user messages by user`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const setMessageToViewed = async (req, res) => {
  console.log('setMessageToView');
  const messageId = req.params.messageId;

  try {
    const foundMessage = await findMessageById(messageId);
    if (!foundMessage) {
      const notFound = new NotFoundEvent(
        req.message,
        EVENT_MESSAGES.notFound,
        'Cant find message by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedMessage = await updateMessageToViewed(messageId);

    if (!updatedMessage) {
      const notFound = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        `No found messages for user ${userId}`
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterMessages.emit('viewed-message', req.message);
    return sendDataResponse(res, 200, { message: updatedMessage });
  } catch (err) {
    const serverError = new ServerErrorEvent(
      `Viewed Message Server error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const deleteMessage = async (req, res) => {
  console.log('deleteMessage');
  const messageId = Number(req.params.messageId);

  try {
    const foundMessage = await findMessageById(messageId);

    if (!foundMessage) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found message',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    await deleteMessageById(messageId);
    // myEmitterMessages.emit('deleted-message', req.user);
    return sendDataResponse(res, 200, {
      message: foundMessage,
      message: `Message ${foundMessage.subject} deleted`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Delete message`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
