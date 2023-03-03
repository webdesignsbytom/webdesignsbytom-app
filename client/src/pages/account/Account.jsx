import React, { useContext, useEffect, useState } from 'react';
import client from '../../utils/client';
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import UserCard from '../../components/users/UserCard';
import CountrySelect from '../../users/utils/CountrySelect';
import { getUserById } from '../../utils/Fetch';
import LoggedInUser from '../../utils/LoggedInUser';

const initAlert = { status: '', content: '' };

function Account() {
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState(initAlert);
  const [updateUserForm, setUpdateUserForm] = useState(user);
  console.log('updateUserForm', updateUserForm);

  useEffect(() => {
    const foundUser = LoggedInUser()
    client
      .get(`/users/${foundUser.id}`)
      .then((res) => {
        setUpdateUserForm(res.data.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  function handleResend() {
    client
      .post(`/users/verify/resend-email/${user.email}`)
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

  const deleteProfile = (event) => {
    event.preventDefault();
    console.log('delete account');

    event.preventDefault();
    console.log('event', event);

    client
      .delete(`/users/delete-user/${user.id}`)
      .then((res) => {
        console.log('res', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
    console.log('update');

    client
      .put(`/users/account/update/${user.id}`, updateUserForm, false)
      .then((res) => {
        console.log('data update', res.data);
        setUser(res.data.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Navbar />
      <div>
        <h1>Account</h1>
      </div>
      {/* Get user error alerts */}
      {alert && (
        <div>
          {alert.status} {alert.content}
        </div>
      )}
      <article>
        <h3 className='flex font-extrabold'>
          {user.firstName} {user.lastName}
        </h3>
      </article>

      <UserCard user={user} />
      <div>
        <h3>Confirm your email address</h3>
        <p className='reminder'>
          Cant find the email?{' '}
          <span onClick={handleResend} className='clickable cursor-pointer'>
            Click <span className='text-blue-500'>here</span> to resend
          </span>
        </p>
      </div>

      {/* update form */}
      <section>
        <form onSubmit={handleUpdate}>
          {/* <!-- Email input --> */}
          <div className='mb-6'>
            <input
              type='text'
              name='email'
              className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
              placeholder='Email address'
              onChange={handleChange}
            />
          </div>

          {/* <!-- FirstName input --> */}
          <div className='mb-6'>
            <input
              type='text'
              name='firstName'
              className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
              placeholder='First Name'
              onChange={handleChange}
            />
          </div>

          {/* <!-- LastName input --> */}
          <div className='mb-6'>
            <input
              type='text'
              name='lastName'
              className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
              placeholder='Last Name'
              onChange={handleChange}
            />
          </div>

          {/* <!-- Country input --> */}
          <div className='mb-4'>
            <CountrySelect handleChange={handleChange} />
          </div>

          <div className='mb-6'>
            <button
              className='bg-green-700 p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-main-colour-med hover:shadow-lg focus:bg-main-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
            >
              Update Profile
            </button>
          </div>
        </form>
      </section>

      {/* Delete account */}
      <section className='mx-2'>
        <button
          onClick={deleteProfile}
          className='bg-red-700 p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-main-colour-med hover:shadow-lg focus:bg-main-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
        >
          Delete Profile
        </button>
      </section>
    </>
  );
}

export default Account;
