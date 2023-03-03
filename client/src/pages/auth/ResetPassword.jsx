import React, { useState } from 'react';
import Navbar from '../../components/nav/Navbar';
// Axios
import client from '../../utils/client';
function ResetPassword() {
  const [resetEmail, setResetEmail] = useState('');
  const [successResetPassword, setSuccessResetPassword] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setResetEmail({
      ...resetEmail,
      [name]: value,
    });
  };
  console.log('resetEmail', resetEmail);
  const handleReset = (event) => {
    event.preventDefault();

    client
      .post(`/users/send-password-reset`, resetEmail, false)
      .then((res) => {
        setSuccessResetPassword(res.data);
        console.log('data', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <div>ResetPassword</div>
      <form onSubmit={handleReset}>
        {/* <!-- Email input --> */}
        <div className='mb-6'>
          <input
            type='text'
            name='resetEmail'
            className='standard__inputs'
            placeholder='Email address'
            onChange={handleChange}
          />
        </div>

        {/* <!-- Submit button --> */}
        <div className='mb-2'>
          <button
            type='submit'
            className='submit__button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            Send Email
          </button>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;
