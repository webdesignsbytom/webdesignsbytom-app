import React, { useContext, useState } from 'react';
import client from '../../utils/client';
import { Navbar } from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
const initAlert = { status: '', content: '' };

function Account() {
  const { user } = useContext(UserContext)
  const [alert, setAlert] = useState(initAlert);

  const email = 'tom_brockington@yahoo.co.uk';
  console.log('ACCOUNT user: ', user);

  function handleResend() {
    client
      .post(`/users/verify/resend-email/${email}`)
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
      <div>Account</div>
      <article>
          <h3 className='flex font-extrabold'>{user.firstName} {user.lastName}</h3>
      </article>
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
