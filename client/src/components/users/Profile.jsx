import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import SmallCountrySelect from '../../users/utils/SmallCountrySelect';
import LoadingSpinner from '../LoadingSpinner';
import UserCard from './UserCard';

function Profile({ handleUpdate, handleChange, deleteProfile }) {
  const { user } = useContext(UserContext);

  return (
    <section className='grid grid-rows-1 w-'>
      {/* Display user */}
      {user.id ? (
        <UserCard user={user} />
      ) : (
        <div className='grid grid-rows-1 justify-center h-full lg:my-12'>
          <LoadingSpinner height={'32'} width={'32'} />
        </div>
      )}

      {/* update form */}
      <form onSubmit={handleUpdate} className='mt-2'>
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

        <div className='mb-4'>
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
  );
}

export default Profile;
