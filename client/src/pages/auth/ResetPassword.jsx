import React, { useState } from 'react';
import Navbar from '../../components/nav/Navbar';
// Fetch
import { postPasswordReset } from '../../utils/Fetch';

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

    postPasswordReset(resetEmail, setSuccessResetPassword)
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
      <div>
        {successResetPassword && <p>Change successful</p>}
      </div>
    </>
  );
}

export default ResetPassword;
