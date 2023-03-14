import dbClient from '../utils/dbClient.js';

export const findAllMessages = () =>
  dbClient.message.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findMessageById = (messageId) =>
  dbClient.message.findFirst({
    where: { id: messageId },
  });

export const findUserMessagesById = (userId) =>
  dbClient.message.findMany({
    where: { userId: userId },
    orderBy: {
      createdAt: 'desc',
    },
  });

export const createMessage = (subject, content, sentFromId, sentFromName, userId) =>
  dbClient.message.create({
    data: {
      subject: subject,
      content: content,
      sentFromId: sentFromId,
      sentFromName: sentFromName,
      userId: userId,
    },
  });

export const updateMessageToViewed = (messageId) =>
  dbClient.notification.update({
    where: {
      id: messageId,
    },
    data: {
      viewed: true,
    },
  });

export const deleteMessageById = (messageId) =>
  dbClient.message.delete({
    where: {
      id: messageId,
    },
  });
