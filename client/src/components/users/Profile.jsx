import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import CountrySelect from '../../users/utils/CountrySelect'
import UserCard from './UserCard'

function Profile({ handleUpdate, handleChange, deleteProfile}) {
    const { user } = useContext(UserContext)
  return (
    <section className='grid'>
    {/* Display user */}
    <UserCard user={user} />
    {/* update form */}
    <form onSubmit={handleUpdate} className='mt-2'>
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
  )
}

export default Profile