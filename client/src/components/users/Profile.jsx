import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import LoadingSpinner from '../utils/LoadingSpinner';
import UserCard from './UserCard';
// Utils
import SmallCountrySelect from '../../users/utils/SmallCountrySelect';

function Profile({
  handleChange,
  handleUpdateUser,
  deleteUser,
  updateAnimation,
  deleteLoadingAnimation,
}) {
  const { user } = useContext(UserContext);

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
          <button
            type='submit'
            className='submit__button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            {updateAnimation ? (
              <div className='grid'>
                <LoadingSpinner height={'5'} width={'5'} />
              </div>
            ) : (
              <span>Update Profile</span>
            )}
          </button>
        </div>
      </form>
      {/* Delete account */}
      <section>
        <div className=''>
          <button
            type='delete'
            onClick={deleteUser}
            className='delete__button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            {deleteLoadingAnimation ? (
              <div className='grid'>
                <LoadingSpinner height={'5'} width={'5'} />
              </div>
            ) : (
              <span>Delete Profile</span>
            )}
          </button>
        </div>
      </section>
    </section>
  );
}

export default Profile;
