import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/nav/Navbar';
// Axios
import client from '../../utils/client';

function EnterNewPassword() {
  const { userId, uniqueString } = useParams();
  console.log('userId', userId);
  console.log('uniqueString', uniqueString);
  const [successPasswordReset, setSuccessPasswordReset] = useState('');
  const [newPassword, setNewPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const [page, setPage] = useState({
    status: '',
    title: '',
    message: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');

    if (newPassword.password !== newPassword.confirmPassword) {
      return <p>Passwords do not match</p>;
    }

    client
      .post(
        `/users/reset-password/${userId}/${uniqueString}`,
        newPassword,
        false
      )
      .then((res) => {
        setSuccessPasswordReset(res.data.status);
        console.log('data', res.data);
        setPage({
          status: res.data.status,
          title: 'Password reset successfully',
          email: res.data.data.user.email,
        });
      })

      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Navbar />
      <div>EnterNewPassword</div>
      <form onSubmit={handleSubmit}>
        {/* <!-- Password input --> */}
        <div className='mb-6'>
          <input
            type='password'
            name='password'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>

        {/* <!-- Confirm Password input --> */}
        <div className='mb-6'>
          <input
            type='password'
            name='confirmPassword'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
            placeholder='Confirm Password'
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
            Submit New Password
          </button>
        </div>
      </form>

      {successPasswordReset && <h3>SUCCESS {page.title}</h3>}
    </>
  );
}

export default EnterNewPassword;
