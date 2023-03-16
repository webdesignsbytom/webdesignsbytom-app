import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Navbar from '../../components/nav/Navbar';
import NotificationsContainer from '../../components/notifications/NotificationsContainer';
import MessagesContainer from '../../components/messages/MessagesContainer';
import Overview from '../../components/account/AccountOverview';
import AccountOverview from '../../components/account/AccountOverview';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Fetch
import { setFormByUserId } from '../../utils/Fetch';
// Utils
import LoggedInUser from '../../utils/LoggedInUser';
import client from '../../utils/client';
import { statusResults } from '../../users/utils/utils';
import DesignsOverview from '../../components/account/DesignsOverview';
import ProjectsOverview from '../../components/account/ProjectsOverview';

function Account() {
  const { user } = useContext(UserContext);
  const [updateUserForm, setUpdateUserForm] = useState(user);
  const [resendVerification, setResendVerification] = useState(true);
  // Notifications
  const [allNotifications, setAllNotifications] = useState([]);
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
  // Design overview
  const [userDesigns, setUserDesigns] = useState([]);
  const [designResponse, setDesignResponse] = useState(statusResults);
  // Project overview
  const [userProjects, setUserProjects] = useState([]);
  const [projectResponse, setProjectResponse] = useState(statusResults);

  console.log('user projecrs', userProjects);
  console.log('user des', userDesigns);

  useEffect(() => {
    const foundUser = LoggedInUser();
    setFormByUserId(foundUser.id, setUpdateUserForm);

    // Notifications
    client
      .get(`/notifications/user-notifications/${user.id}`)
      .then((res) => {
        setAllNotifications(res.data.data.notifications);
      })
      .catch((err) => {
        console.error('Unable to get notifications', err);
      });

    client
      .get(`/messages/user-messages/${user.id}`)
      .then((res) => {
        setUserMessages(res.data.data.messages);
      })
      .catch((err) => {
        console.error('Unable to get user messages', err);
      });

    client
      .get(`/designs/user-designs/${user.id}`)
      .then((res) => {
        setUserDesigns(res.data.data.designs);
        setDesignResponse({
          status: true,
          message: 'Success',
        });
      })
      .catch((err) => {
        setDesignResponse({
          status: false,
          message: 'Fail',
        });
        console.error('Unable to get all notifications', err.response);
      });

    client
      .get(`/projects/user-projects/${user.id}`)
      .then((res) => {
        console.log('project res', res.data);
        setUserProjects(res.data.data.projects);
        setProjectResponse({
          status: true,
          message: 'Success',
        });
      })
      .catch((err) => {
        setProjectResponse({
          status: false,
          message: 'Fail',
        });
        console.error('Unable to get all notifications', err.response);
      });
  }, [user.id]);

  useEffect(() => {
    setTimeout(() => {
      if (!user.isVerified) {
        setResendVerification(false);
      }
    }, 2000);
  }, [user.isVerified]);

  return (
    <>
      <div className='bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] lg:grid-rows-reg overflow-hidden'>
          {/* Titles */}
          <div className='text-left ml-2 mt-4 mb-1 lg:mx-6'>
            <h1 className='font-bold text-xl'>
              Account: {user.firstName} {user.lastName}
            </h1>
          </div>
          {/* Main Container */}
          <section className='interaction__container'>
            {/* Left */}
            <section className='grid md:grid-rows-reg h-min sm:h-[90%] lg:h-full'>
              {/* Nav */}
              <nav className='p-2 h-min lg:mr-4 lg:mb-4 border-b-2 border-hover-text border-solid mb-4'>
                <ul className='flex justify-between lg:justify-start lg:gap-28'>
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
                    Designs
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
                    Projects
                  </li>
                </ul>
              </nav>
              {/* Content */}
              <section className='grid lg:mr-4'>
                {displayOverview && <AccountOverview />}
                {displayDesigns && (
                  <DesignsOverview
                    userDesigns={userDesigns}
                    designResponse={designResponse}
                  />
                )}
                {displayProjects && (
                  <ProjectsOverview
                    userProjects={userProjects}
                    projectResponse={projectResponse}
                  />
                )}

                {selectedNavElement === 'overview' && displayFixed === true && (
                  <AccountOverview />
                )}
                {selectedNavElement === 'designs' && displayFixed === true && (
                  <DesignsOverview
                    userDesigns={userDesigns}
                    designResponse={designResponse}
                  />
                )}
                {selectedNavElement === 'projects' && displayFixed === true && (
                  <ProjectsOverview
                    userProjects={userProjects}
                    projectResponse={projectResponse}
                  />
                )}
              </section>
            </section>

            {/* Right */}
            <section className='hidden lg:grid lg:grid-rows-ls gap-2 overflow-hidden'>
              {/* Messages */}
              <section className='grid lg:grid-rows-2 gap-1 border-2 border-black border-solid rounded-sm overflow-hidden p-1'>
                <section className='grid lg:grid-rows-reg border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 h-min border-black border-solid pl-2 py-1 bg-main-colour lg:bg-white'>
                    Notifications
                  </h3>
                  <div className='grid max-h-[300px] lg:max-h-none lg:items-center overflow-scroll overflow-x-hidden bg-main-colour'>
                    {allNotifications.length < 1 ? (
                      <div className='grid grid-rows-1 justify-center'>
                        <LoadingSpinner
                          height={'h-5 lg:h-12'}
                          width={'w-5 lg:w-12'}
                        />
                      </div>
                    ) : (
                      <NotificationsContainer
                        notifications={allNotifications}
                      />
                    )}
                  </div>
                </section>

                <section className='grid lg:grid-rows-reg border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 h-min border-black border-solid pl-2 py-1 bg-main-colour lg:bg-white'>
                    Messages
                  </h3>
                  <div className='grid max-h-[300px] lg:max-h-none lg:items-center overflow-scroll overflow-x-hidden bg-main-colour w-full'>
                    {allNotifications.length < 1 ? (
                      <div className='grid grid-rows-1 justify-center'>
                        <LoadingSpinner
                          height={'h-5 lg:h-12'}
                          width={'w-5 lg:w-12'}
                        />
                      </div>
                    ) : (
                      <MessagesContainer messages={userMessages} />
                    )}
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

export default Account;
