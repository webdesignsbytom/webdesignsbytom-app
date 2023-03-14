import client from './client';

// NOTIFICATIONS
// Get all user notifications
export function getUserNotifications(setAllNotifications, userId) {
  client
    .get(`/notifications/${userId}`)
    .then((res) => {
      setAllNotifications(res.data.data.notifications);
    })
    .catch((err) =>
      console.error('Unable to get all notifications', err.response)
    );
}

// USERS
// Get all users
export function getUserById(userId, setUser) {
  client
    .get(`/users/${userId}`)
    .then((res) => {
      setUser(res.data.data.user);
    })
    .catch((err) => {
      console.error('Unable to get user by id', err);
    });
}
