import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Axios
import client from '../../utils/axios/client';

function EnterNewPassword() {
  const { userId, uniqueString } = useParams();

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
      <div className='w-full dark:bg-black'>
        <Navbar />
        <main>
          <article className='dark:text-white text-center my-4'>
            <h1>Enter New Password</h1>
          </article>

          <form onSubmit={handleSubmit}>
            {/* <!-- Password input --> */}
            <div className='mb-6'>
              <input
                type='password'
                name='password'
                className='standard__inputs'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            {/* <!-- Confirm Password input --> */}
            <div className='mb-6'>
              <input
                type='password'
                name='confirmPassword'
                className='standard__inputs'
                placeholder='Confirm Password'
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
                Submit New Password
              </button>
            </div>
          </form>
        </main>
        {successPasswordReset && <h3>SUCCESS {page.title}</h3>}
      </div>
    </>
  );
}

export default EnterNewPassword;
