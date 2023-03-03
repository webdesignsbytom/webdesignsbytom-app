import React, { useContext, useEffect, useState } from 'react';
import client from '../../utils/client';
import Navbar from '../../components/nav/Navbar';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import UserCard from '../../components/users/UserCard';
import CountrySelect from '../../users/utils/CountrySelect';
import LoggedInUser from '../../utils/LoggedInUser';
// Fetch
import { setFormByUserId } from '../../utils/Fetch';
import { deleteAccount } from '../../utils/Fetch';
import { useNavigate } from 'react-router-dom';
// Data
import { sampleUserData } from '../../users/utils/utils';

const initAlert = { status: '', content: '' };

function Account() {
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState(initAlert);
  const [updateUserForm, setUpdateUserForm] = useState(user);
  console.log('updateUserForm', updateUserForm);
  let navigate = useNavigate();

  useEffect(() => {
    const foundUser = LoggedInUser()
    setFormByUserId(foundUser.id, setUpdateUserForm)
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

    deleteAccount(user.id)
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
            <button
              className='submit__button'
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
          className='delete__button'
        >
          Delete Profile
        </button>
      </section>
    </>
  );
}

export default Account;
