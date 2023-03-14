import client from './client';

// USERS
// Update user profile
export function putUpdateUser(userId, updateUserForm, setUser) {
  client
    .put(`/users/account/update/${userId}`, updateUserForm, false)
    .then((res) => {
      console.log('data update', res.data);
      setUser(res.data.data.user);
    })
    .catch((err) => {
      console.error('Unable to update user', err);
    });
}
