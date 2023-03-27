import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import { SubmitButton } from '../../components/utils/SubmitButtons';
import { ToggleContext } from '../../context/ToggleContext';
import { statusResults } from '../../users/utils/utils';

function UpdatePassword() {
  const { toggleNavigation } = useContext(ToggleContext);
  // Form data
  const [newPasswordForm, setNewPasswordForm] = useState({});

  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  let navigate = useNavigate();
  const location = useLocation();

  console.log('NAVIGATION', navigate);
  console.log('location', location);

  const updatePassword = () => {
    console.log('update');
  };

  return (
    <div className='bg-white dark:bg-black h-[calc(100vh-98px)] lg:h-screen w-full'>
      <Navbar />
      {!toggleNavigation && (
        <div>
          <div>
            <h1>Password update</h1>
          </div>
          <section>
            <label htmlFor='password'>Password</label>
            <input type='password' />

             {/* <!-- Submit button --> */}
        <div className='mb-2'>
          <SubmitButton
            loadingAnimation={updateAnimation}
            mainButtonContent={mainButtonContent}
            responseMessage={updateResponseMessage}
            buttonMessage='Update Profile'
            spinnerHeight='h-5'
            spinnerWidth='w-5'
            action={updatePassword}
          />
        </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default UpdatePassword;
