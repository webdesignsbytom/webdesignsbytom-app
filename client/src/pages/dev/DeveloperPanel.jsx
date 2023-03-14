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
import MessagesContainer from '../../components/messages/MessagesContainer';
import Overview from '../../components/account/Overview';
import Designs from '../../components/account/Designs';
import Projects from '../../components/account/Projects';
import DevOverview from '../../components/dev/DevOverview';

const initAlert = { status: '', content: '' };

function DeveloperPanel() {
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
  // Display items
  const [displayOverview, setDisplayOverview] = useState(false);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displayDesigns, setDisplayDesigns] = useState(false);
  const [selectedNavElement, setSelectedNavElement] = useState('overview');
  const [displayFixed, setDisplayFixed] = useState(true);
  // Favorites
  const [listOfFavorites, setListOfFavorites] = useState([]);

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

  // function handleResend() {
  //   postResendVerificationEmail(user.email, setAlert, initAlert);
  // }

  // const deleteProfile = (event) => {
  //   event.preventDefault();

  //   deleteAccount(user.id);
  //   setUser(sampleUserData);
  //   localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

  //   navigate('/', { replace: true });
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setUpdateUserForm({
  //     ...updateUserForm,
  //     [name]: value,
  //   });
  // };

  // const handleUpdate = (event) => {
  //   event.preventDefault();

  //   putUpdateUser(user.id, updateUserForm, setUser);
  // };

  return (
    <>
      <div className='bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] lg:grid-rows-reg overflow-hidden'>
          {/* Titles */}
          <div className='text-left mt-4 mb-1 pl-4 lg:mx-6'>
            <h1 className='font-bold text-xl'>
            Developer Panel: {user.firstName} {user.lastName}
            </h1>
          </div>
          {/* Main Container */}
          <section className='interaction__container'>
            {/* Left */}
            <section className='grid lg:grid-rows-reg'>
              {/* Nav */}
              <nav className='p-2 lg:w-[90%] lg:pr-12 border-b-2 border-hover-text border-solid w-full'>
                <ul className='flex justify-between lg:text-left lg:gap-24'>
                  <li
                    onMouseEnter={() => {
                      setDisplayOverview(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplayOverview(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('overview')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Overview
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDisplayDesigns(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplayDesigns(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('designs')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Users
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDisplayProjects(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplayProjects(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('projects')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Events
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDisplayProjects(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplayProjects(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('projects')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Search
                  </li>
                </ul>
              </nav>
              {/* Content */}
              <section className='my-2'>
                {displayOverview && <DevOverview />}
                {displayDesigns && <Designs />}
                {displayProjects && <Projects />}
                {selectedNavElement === 'overview' && displayFixed === true && (
                  <DevOverview />
                )}
                {selectedNavElement === 'designs' && displayFixed === true && (
                  <Designs />
                )}
                {selectedNavElement === 'projects' && displayFixed === true && (
                  <Projects />
                )}
              </section>
            </section>
            {/* Right */}
            <section className='grid lg:grid-rows-ls gap-2 overflow-hidden'>
              {/* Messages */}
              <section className='grid lg:grid-rows-2 gap-1 border-2 border-black border-solid rounded-sm overflow-hidden p-1'>
                <section className='grid border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid pl-2 py-1 bg-main-colour lg:bg-white'>
                    Notifications
                  </h3>
                  <div className='max-h-[300px] lg:max-h-none overflow-scroll overflow-x-hidden bg-main-colour'>
                    <NotificationsContainer notifications={allNotifications} />
                  </div>
                </section>
                <section className='grid border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid pl-2 py-1 bg-main-colour lg:bg-white'>
                    Messages
                  </h3>
                  <div className='max-h-[300px] lg:max-h-none overflow-scroll overflow-x-hidden bg-main-colour'>
                    <MessagesContainer messages={userMessages} />
                  </div>
                </section>
              </section>
              {/* Favorites */}
              <section className='hidden lg:grid border-2 border-black border-solid rounded-sm p-1'>
                <div className='border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid pl-2 py-1'>
                    Favorites
                  </h3>
                  <ul className='bg-main-colour grid h-full'>
                    {listOfFavorites > 0 ? (
                      listOfFavorites.map((favorite, index) => {
                        return <li key={index}>{favorite.name}</li>;
                      })
                    ) : (
                      <div className='grid justify-center'>
                        <p>Nothing to display</p>
                      </div>
                    )}
                  </ul>
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

export default DeveloperPanel;
