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
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
} from '../event/utils/errorUtils.js';

export const getAllMessages = async (req, res) => {
  console.log('get all messages');
  try {
    // Find all messages
    const foundMessages = await findAllMessages();

    // If no found messages
    if (!foundMessages) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found messages',
        'Event database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterMessages.emit('get-all-messages', req.user);
    return sendDataResponse(res, 200, { messages: foundMessages });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const getMessageById = async (req, res) => {
  console.log('USer by ID req', req.user);
  console.log('req.params', req.params);
  const messageId = req.params.messageId

  try {
    console.log('test');
    const foundMessage = await findMessageById(messageId);
    console.log('foundMessage', foundMessage);
    // If no found messages
    if (!foundMessage) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.user,
        'Not found event',
        'Cant find message by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterMessages.emit('get-message-by-id', req.user)
    return sendDataResponse(res, 200, { message: foundMessage });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get message by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewMessage = async (req, res) => {
  console.log('createNewMessage');
  const { subject, content, sentFromId, userId } = req.body;
  console.log(req.body);

  try {
    //
    if (!subject || !content || !sentFromId || !userId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Message creation: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const foundUser = await findUserById(userId);
    console.log('found message', foundUser);

    if (foundUser) {
      return sendDataResponse(res, 400, { message: 'Recipient not found in database' });
    }

    const createdMessage = await createMessage(subject, content, sentFromId, userId);
    console.log('created message', createdMessage);

    // myEmitterMessages.emit('create-message', createdMessage);

    return sendDataResponse(res, 201, { createdMessage });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new message`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const getMessagesFromUser = async (req, res) => {
  console.log('get user id message');
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

    const foundMessages = await findUserMessagesById(userId);
    console.log('foundMessages', foundMessages);
    // If no found users

    myEmitterMessages.emit('get-user-messages', req.user);
    return sendDataResponse(res, 200, { messages: foundMessages });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get user messages by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


export const setMessageToViewed = async (req, res) => {
  console.log('setMessageToView');
  const messageId = req.params.messageId;
  console.log('messageId', messageId);

  try {
    const foundMessage = await findMessageById(messageId);
    console.log('foundMessage', foundMessage);
    // If no found messages
    if (!foundMessage) {
      // Create error instance
      const notFound = new NotFoundEvent(
        req.message,
        'Not found event',
        'Cant find message by ID'
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const updatedMessage = await updateMessageToViewed(messageId);
    console.log('updated message', updatedMessage);

    // myEmitterMessages.emit('viewed-message', req.message);
    return sendDataResponse(res, 200, { message: updatedMessage });
  } catch (err) {
    // Create error instance
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
    console.log('foundMessage', foundMessage);

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
