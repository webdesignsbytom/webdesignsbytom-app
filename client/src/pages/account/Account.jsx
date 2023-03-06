import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Navbar from '../../components/nav/Navbar';
import UserCard from '../../components/users/UserCard';
import CountrySelect from '../../users/utils/CountrySelect';
import LoggedInUser from '../../utils/LoggedInUser';
// Fetch
import {
  setFormByUserId,
  deleteAccount,
  postResendVerificationEmail,
  putUpdateUser,
} from '../../utils/Fetch';
// Data
import { sampleUserData } from '../../users/utils/utils';
import ResendConfirmEmail from '../../components/popups/ResendConfirmEmail';

const initAlert = { status: '', content: '' };

function Account() {
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState(initAlert);
  const [updateUserForm, setUpdateUserForm] = useState(user);
  const [resendVerification, setResendVerification] = useState(true);
  let navigate = useNavigate();

  console.log('user: ', user);

  useEffect(() => {
    const foundUser = LoggedInUser();
    setFormByUserId(foundUser.id, setUpdateUserForm);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!user.isVerified) {
        setResendVerification(false);
      }
    }, 2000);
  }, []);

  function handleResend() {
    postResendVerificationEmail(user.email, setAlert, initAlert);
  }

  const deleteProfile = (event) => {
    event.preventDefault();

    deleteAccount(user.id);
    setUser(sampleUserData);
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdateUserForm({
      ...updateUserForm,
      [name]: value,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    putUpdateUser(user.id, updateUserForm, setUser);
  };

  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] lg:grid-rows-reg'>
          {/* Titles */}
          <div className='text-left my-2'>
            <h1 className='font-extrabold text-2xl'>
              Account: {user.firstName} {user.lastName}
            </h1>
          </div>
          {/* Main container */}
          <section className='grid lg:grid-cols-2'>
            <section className='p-2'>
              {/* Display user */}
              <UserCard user={user} />
              {/* update form */}
              <form onSubmit={handleUpdate}>
                {/* <!-- Email input --> */}
                <div className='mb-6'>
                  <input
                    type='text'
                    name='email'
                    className='standard__inputs'
                    placeholder='Email address'
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- FirstName input --> */}
                <div className='mb-6'>
                  <input
                    type='text'
                    name='firstName'
                    className='standard__inputs'
                    placeholder='First Name'
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- LastName input --> */}
                <div className='mb-6'>
                  <input
                    type='text'
                    name='lastName'
                    className='standard__inputs'
                    placeholder='Last Name'
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- Country input --> */}
                <div className='mb-4'>
                  <CountrySelect handleChange={handleChange} />
                </div>

                <div className='mb-6'>
                  <button className='submit__button'>Update Profile</button>
                </div>
              </form>
              {/* Delete account */}
              <section>
                <button onClick={deleteProfile} className='delete__button'>
                  Delete Profile
                </button>
              </section>
            </section>

            <section className='bg-blue-300 p-2' ></section>

            {!resendVerification && (
              <ResendConfirmEmail handleResend={handleResend} />
            )}
          </section>
        </section>
      </div>
    </>
  );
}

export default Account;
