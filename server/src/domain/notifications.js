import dbClient from '../utils/dbClient.js';

export const findAllNotifications = () => dbClient.notification.findMany({});

export const findNotificationsByUserId = (userId) =>
    dbClient.notification.findMany({
        where: {
            userId: userId,
        }
    })

export const findNotificationById = (notificationId) =>
    dbClient.notification.findFirst({
        where: {
            id: notificationId,
        }
    })

export const findViewedNotifications = (userId, value) =>
    dbClient.notification.findMany({
        where: {
            userId: userId,
            viewed: value
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

export const updateNotificationById = (notificationId) =>
    dbClient.notification.update({
        where: {
            id: notificationId,
        },
        data: {
            viewed: true,
        }
    })

export const deleteNotificationById = (notificationId) => dbClient.notification.delete({
    where: {
        id: notificationId,
    }
})