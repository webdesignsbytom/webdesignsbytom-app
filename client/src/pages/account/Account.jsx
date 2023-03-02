import React, { useContext, useState } from 'react';
import client from '../../utils/client';
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import UserCard from '../../components/users/UserCard'

const initAlert = { status: '', content: '' };

function Account() {
  const { user } = useContext(UserContext);
  const [alert, setAlert] = useState(initAlert);

  console.log('ACCOUNT user: ', user);

  function handleResend() {
    client
      .post(`/users/verify/resend-email/${user.email}`)
      .then((res) => {
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
  return (
    <>
      <Navbar />
      <div>
        <h1>Account</h1>
      </div>
      {/* Get user error alerts */}
      {alert && (
        <div>
          {alert.status} {alert.content}
        </div>
      )}
      <article>
        <h3 className='flex font-extrabold'>
          {user.firstName} {user.lastName}
        </h3>
      </article>

      <UserCard />
      <div>
        <h3>Confirm your email address</h3>
        <p className='reminder'>
          Cant find the email?{' '}
          <span onClick={handleResend} className='clickable cursor-pointer'>
            Click <span className='text-blue-500'>here</span> to resend
          </span>
        </p>
      </div>
    </>
  );
}

export default Account;
