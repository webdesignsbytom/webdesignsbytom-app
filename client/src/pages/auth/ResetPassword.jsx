import React, { useState } from 'react';
// Axios
import client from '../../users/utils/client';

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
      <div>ResetPassword</div>
      <form onSubmit={handleReset}>
        {/* <!-- Email input --> */}
        <div className='mb-6'>
          <input
            type='text'
            name='resetEmail'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='Email address'
            onChange={handleChange}
          />
        </div>

        {/* <!-- Submit button --> */}
        <div className='mb-2'>
          <button
            type='submit'
            className='inline-block px-7 py-3 bg-main-colour text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-main-colour-med hover:shadow-lg focus:bg-main-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
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
