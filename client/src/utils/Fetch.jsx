import client from './client';

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

export function setFormByUserId(userId, setUpdateUserForm) {
  console.log('getUserById', userId);
  client
    .get(`/users/${userId}`)
    .then((res) => {
      setUpdateUserForm(res.data.data.user);
    })
    .catch((err) => {
      console.error('Unable to get user date', err);
    });
}

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

// Notifications
export function getUserNotifications(setAllNotifications, userId) {
  client
    .get(`/notifications/${userId}`)
    .then((res) => {
      setAllNotifications(res.data.data.notifications);
    })
    .catch((err) => console.error('Unable to get all notifications', err.response));
}

export function getSeenNotifications(setSeenNotifications, userId) {
  client
    .get(`/notifications/${userId}/true`)
    .then((res) => {
      setSeenNotifications(res.data.data.notifications);
    })
    .catch((err) => console.error('Unable to seen notifications', err.response));
}

export function getUnseenNotifications(setUnseenNotifications, userId) {
  client
    .get(`/notifications/${userId}/false`)
    .then((res) => {
      setUnseenNotifications(res.data.data.notifications);
    })
    .catch((err) => console.error('Unable to get unseen notifications', err.response));
}

export function putSetNotificationViewed(notificationId) {
  client
    .put(`/notifications/viewed/${notificationId}`)
    .then((res) => {
      console.log('res', res.data)
    })
    .catch((err) => console.error('Unable to set to viewed', err.response));
}

// Account page
export function postResendVerificationEmail(email, setAlert, initAlert) {
  client
    .post(`/users/verify/resend-email/${email}`)
    .then((res) => {
      console.log('aaa', res.data);
      setAlert({ status: 'success', content: res.data.message });
      setTimeout(() => {
        setAlert(initAlert);
      }, 5000);
    })
    .catch((res) => {
      setAlert({ status: 'error', content: res.response.data.message });
      setTimeout(() => {
        setAlert(initAlert);
      }, 5000);
    });
}

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

// Developmer page

export function getEventsLog(setEventLog) {
  client
    .get(`/events`)
    .then((res) => {
      console.log('res', res.data);
      setEventLog(res.data.data.events);
    })
    .catch((err) => {
      console.error('Unable to get all events', err);
    });
}

// Register
export function postRegister(userData, setSuccessRegisterUser, login) {
  client
    .post('/users/register', userData, false)
    .then((res) => {
      setSuccessRegisterUser(res.data.data.createdUser.email);
    })
    .then(() => login())
    .catch((err) => {
      console.error('Unable to register new user', err);
    });
}

// Login
export function postLogin(loginForm, setSuccessLoginUser, setUser, homePage) {
  client
    .post('/login', loginForm, false)
    .then((res) => {
      setSuccessLoginUser(res.data.status);
      localStorage.setItem(
        process.env.REACT_APP_USER_TOKEN,
        res.data.data.token
      );
      setUser(res.data.data.existingUser);
    })
    .then(() => homePage())

    .catch((err) => {
      console.error('Unable to login', err);
    });
}

// Verify email
export function postVerifyEmail(userId, uniqueString, setPage, isFetched) {
  client
    .get(`/users/verify/${userId}/${uniqueString}`)
    .then((res) => {
      setPage({
        status: res.data.status,
        title: 'Account verified successfully',
        email: res.data.user.email,
      });
    })
    .catch((res) => {
      if (!isFetched) {
        const data = res.response.data;
        setPage({
          status: data.status,
          title: 'An Error Occurred',
          message: data.message,
        });
      }
    })
    .catch((err) => {
      console.error('Unable to send verification email', err);
    });
}

// Password reset
export function postPasswordReset(resetEmail, setSuccessResetPassword) {
  client
    .post(`/users/send-password-reset`, resetEmail, false)
    .then((res) => {
      setSuccessResetPassword(res.data);
      console.log('data', res.data);
    })
    .catch((err) => {
      console.error('Unable to send password reset', err);
    });
}
