import client from './client';

export function getUserById(userId, setUser) {
  client
    .get(`/users/${userId}`)
    .then((res) => {
      setUser(res.data.data.user);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function setFormByUserId(userId, setUpdateUserForm) {
  console.log('getUserById', userId);
  client
    .get(`/users/${userId}`)
    .then((res) => {
      setUpdateUserForm(res.data.data.user);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deleteAccount(userId) {
  client
    .delete(`/users/delete-user/${userId}`)
    .then((res) => {
      alert(`Deleted user ${userId}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function deletePost(setPostResponse, postId) {
  client
    .delete(`/post/${postId}`)
    .then((res) => {
      setPostResponse(res.data);
    })
    .catch((err) => console.error('Unable to delete post', err.response));
}

export function getUserNotifications(setNotifications, userId) {
  client
    .get(`/notifications/${userId}`)
    .then((res) => {
      setNotifications(res.data.data.notifications);
    })
    .catch((err) => console.error('Unable to delete post', err.response));
}
