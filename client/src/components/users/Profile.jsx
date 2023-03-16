import React, { useContext, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import LoadingSpinner from '../utils/LoadingSpinner';
import UserCard from './UserCard';
// Utils
import SmallCountrySelect from '../../users/utils/SmallCountrySelect';
import client from '../../utils/client';
import { statusResults } from '../../users/utils/utils';
import { SubmitButton, DeleteButton } from '../utils/SubmitButtons';

function Profile() {
  const { user } = useContext(UserContext);
  const [userUpdateForm, setUserUpdateForm] = useState({});
  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [deleteLoadingAnimation, setDeleteLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    setUpdateAnimation(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserUpdateForm({
      ...userUpdateForm,
      [name]: value,
    });
  };

  const deleteUser = (event) => {
    event.preventDefault();
    setDeleteLoadingAnimation(true);

    client
      .delete(`/users/delete-user/${user.id}`)
      .then((res) => {
        console.log('res', res.data);
        setDeleteLoadingAnimation(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className='grid grid-rows-one'>
      {/* Display user */}
      {user.id ? (
        <UserCard user={user} />
      ) : (
        <div className='grid grid-rows-1 justify-center h-full lg:my-12'>
          <LoadingSpinner height={'32'} width={'32'} />
        </div>
      )}

      {/* update form */}
      <form onSubmit={handleUpdateUser} className='mt-2'>
        <div className='mb-2'>
          <h2>Update Account Information</h2>
        </div>
        {/* <!-- Email input --> */}
        <div className='mb-4'>
          <input
            type='text'
            name='email'
            className='profile__inputs'
            placeholder='Email address'
            onChange={handleChange}
          />
        </div>

        <div className='flex gap-2'>
          {/* <!-- FirstName input --> */}
          <div className='mb-4 w-full'>
            <input
              type='text'
              name='firstName'
              className='profile__inputs'
              placeholder='First Name'
              onChange={handleChange}
            />
          </div>

          {/* <!-- LastName input --> */}
          <div className='mb-4 w-full'>
            <input
              type='text'
              name='lastName'
              className='profile__inputs'
              placeholder='Last Name'
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <!-- Country input --> */}
        <div className='mb-4'>
          <SmallCountrySelect handleChange={handleChange} />
        </div>

        {/* <!-- Submit button --> */}
        <div className='mb-2'>
          <SubmitButton
            loadingAnimation={updateAnimation}
            mainButtonContent={mainButtonContent}
            responseMessage={updateResponseMessage}
            buttonMessage='Update Profile'
            spinnerHeight='h-5'
            spinnerWidth='w-5'
          />
        </div>
      </form>
      {/* Delete account */}
      <section>
        <div className=''>
        <DeleteButton
            loadingAnimation={deleteLoadingAnimation}
            mainButtonContent={mainButtonContent}
            responseMessage={updateResponseMessage}
            buttonMessage='Delete Account'
            spinnerHeight='h-5'
            spinnerWidth='w-5'
          />
        </div>
      </section>
    </section>
  );
}

export default Profile;
