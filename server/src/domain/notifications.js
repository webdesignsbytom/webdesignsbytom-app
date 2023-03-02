import dbClient from '../utils/dbClient.js';

export const findAllNotifications = () => dbClient.notification.findMany({});

export const findNotificationsByUserId = (userId) =>
    dbClient.notification.findMany({
        where: {
            userId: userId,
        }
    })

export const findNotificationById = (id) =>
    dbClient.notification.findFirst({
        where: {
            id: id,
        }
    })

export const createNewNotification = (type, content, userId) =>
    dbClient.notification.create({
        data: {
            type: type,
            content: content,
            userId: userId
        }
    })

export const updateNotificationById = (id) =>
    dbClient.notification.update({
        where: {
            id: id,
        },
        data: {
            viewed: true,
        }
    })

export const deleteNotificationById = (id) => dbClient.notification.delete({
    where: {
        id: id,
    }
})