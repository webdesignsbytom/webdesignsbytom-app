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
import MessagesComponent from '../../components/messages/MessagesComponent';
import Profile from '../../components/users/Profile';
import client from '../../utils/client';
import NoteItem from '../../components/notifications/NoteItem';
import NotificationsContainer from '../../components/notifications/NotificationsContainer';
import MessageItem from '../../components/messages/MessageItem';

const initAlert = { status: '', content: '' };

function Account() {
  const { user, setUser } = useContext(UserContext);
  const [alert, setAlert] = useState(initAlert);
  const [updateUserForm, setUpdateUserForm] = useState(user);
  const [resendVerification, setResendVerification] = useState(true);
  // Notifications
  const [allNotifications, setAllNotifications] = useState([]);
  const [viewedNotifications, setViewedNotifications] = useState([]);
  const [unSeenNotifications, setUnSeenNotifications] = useState([]);
  const [displayNotifications, setDisplayNotifications] =
    useState('new-notifications');
  // Messages
  const [userMessages, setUserMessages] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const foundUser = LoggedInUser();
    setFormByUserId(foundUser.id, setUpdateUserForm);

    // Notifications
    client
      .get(`/notifications/user-notifications/${user.id}`)
      .then((res) => {
        console.log('res', res.data);
        setAllNotifications(res.data.data.notifications);
      })
      .catch((err) => {
        console.error('Unable to get notifications', err);
      });

    client
      .get(`/messages/user-messages/${user.id}`)
      .then((res) => {
        console.log('response', res.data);
        setUserMessages(res.data.data.messages);
      })
      .catch((err) => {
        console.error('Unable to get user messages', err);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!user.isVerified) {
        setResendVerification(false);
      }
    }, 2000);
  }, [user.isVerified]);

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
      <div className='bg-white dark:bg-black max-h-screen lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] lg:grid-rows-reg overflow-hidden'>
          {/* Titles */}
          <div className='text-left mt-2 mb-2 pl-4'>
            <h1 className='font-bold text-xl'>
              Account: {user.firstName} {user.lastName}
            </h1>
          </div>
          {/* Main Container */}
          <section className='interaction__container'>
            {/* Left */}
            <section className='bg-green-300 grid lg:grid-rows-reg'>
              {/* Nav */}
              <nav className='bg-yellow-300 p-2 lg:pr-24 lg:w-min border-b-2 border-black border-solid'>
                <ul className='flex lg:text-left gap-24'>
                  <li>Overview</li>
                  <li>Designs</li>
                  <li>Projects</li>
                </ul>
              </nav>
              {/* Content */}
              <section className='bg-red-500'>stuff</section>
            </section>
            {/* Right */}
            <section className='bg-blue-300 grid lg:grid-rows-ls gap-2 overflow-hidden'>
              {/* Messages */}
              <section className='bg-green-300 grid lg:grid-rows-2 lg:gap-1 border-2 border-black border-solid rounded-sm overflow-hidden p-1'>
                <section className='grid border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid'>
                    Notifications
                  </h3>
                  <div className='overflow-scroll overflow-x-hidden'>
                    <NotificationsContainer notifications={allNotifications} />
                  </div>
                </section>
                <section className='border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid'>
                    Messages
                  </h3>
                  {/* <div className='overflow-scroll overflow-x-hidden'>
                    <ul>
                      {userMessages.map((message, index) => {
                        return (
                          <li key={index}>
                            <MessageItem message={message} />
                          </li>
                        )
                      })}
                    </ul>
                  </div> */}
                </section>
              </section>
              {/* Favorites */}
              <section className='hidden lg:grid bg-yellow-300 border-2 border-black border-solid rounded-sm p-1'>
                <div className='border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid'>
                    Favorites
                  </h3>
                </div>
              </section>
            </section>
          </section>
          {/* {!resendVerification && (
            <ResendConfirmEmail handleResend={handleResend} />
          )} */}
        </section>
      </div>
    </>
  );
}

export default Account;
