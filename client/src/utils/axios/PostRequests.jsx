import client from './client';

// ACCOUNT
// Resend verification email
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
