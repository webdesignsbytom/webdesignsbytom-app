import client from './client';

// ACCOUNT
// Delete user account
export function deleteAccount(userId) {
    client
      .delete(`/users/delete-user/${userId}`)
      .then((res) => {
        alert(`Deleted user ${userId}`);
      })
      .catch((err) => {
        console.error('Unable to delete account', err);
      });
  }
  