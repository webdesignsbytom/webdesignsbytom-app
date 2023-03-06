import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar  from '../../components/nav/Navbar';
import FoundUser from '../../components/users/FoundUser';
// Data
import { sampleUserData } from '../../users/utils/utils';
// Axios
import client from '../../utils/client';
// Context
import { UserContext } from '../../context/UserContext';

function AdminPanel() {
  const { user, setUser, token }  = useContext(UserContext)
  const [foundUser, setFoundUser] = useState(sampleUserData);
  const [userId, setUserId] = useState('');
  console.log('Admin User', user);
  console.log('userId', userId);
  console.log('foundUser', foundUser);
  console.log('token', token);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserId({
      ...userId,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    client
      .get(`/users/${userId.id}`)
      .then((res) => {
        console.log('res', res.data);
        setFoundUser(res.data.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div>
        <Navbar />
        <h2>AdminPanel</h2>
        <form onSubmit={handleSubmit} className='mx-2'>
          <div>
            <h2>Search Users</h2>
          </div>
          {/* ID Input */}
          <div className='mb-2'>
            <input
              type='text'
              name='id'
              className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
              placeholder='User ID'
              onChange={handleChange}
            />
          </div>
          {/* Email input */}
          <div className='mb-2'>
            <input
              type='email'
              name='email'
              className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
              placeholder='User Email'
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
              Search
            </button>
          </div>
        </form>

        {foundUser.email ? (
          <FoundUser foundUser={foundUser} />
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    </>
  );
}

export default AdminPanel;
