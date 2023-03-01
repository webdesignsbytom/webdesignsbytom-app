import React, { useState } from 'react';
import client from '../../users/utils/client';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/nav/Navbar';

const initAlert = { status: '', content: '' };

function Account() {
  const [alert, setAlert] = useState(initAlert);

  const email = 'tom_brockington@yahoo.co.uk';

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
      <p className='reminder'>
        Cant find the email?{' '}
        <span onClick={handleResend} className='clickable cursor-pointer'>
          Click here to resend
        </span>
      </p>
    </>
  );
}

export default Account;
