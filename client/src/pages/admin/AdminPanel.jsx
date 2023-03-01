import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/nav/Navbar';
// Data
import { sampleUserData } from '../../users/utils';
// Axios
import client from '../../users/utils/client';

function AdminPanel() {
  const [foundUser, setFoundUser] = useState(sampleUserData);
  const [userId, setUserId] = useState('');
  console.log('userId', userId);

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
      .get(`/users/${userId}`)
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
        <form onSubmit={handleSubmit}>
          {/* ID Input */}
          <div className='mb-6'>
            <input
              type='text'
              name='id'
              className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
              placeholder='User ID'
              onChange={handleChange}
            />
          </div>
          {/* <!-- Submit button --> */}
          <div className='mb-2'>
            <button
              type='submit'
              className='inline-block px-7 py-3 bg-main-colour text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-main-colour-med hover:shadow-lg focus:bg-main-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              Search
            </button>
          </div>
        </form>

        {foundUser.email ? (
          <div>{foundUser.email}</div>
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    </>
  );
}

export default AdminPanel;
