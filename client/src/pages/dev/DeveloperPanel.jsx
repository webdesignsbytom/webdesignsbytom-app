import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Navbar from '../../components/nav/Navbar';
import EventsContainer from '../../components/events/EventsContainer';
import DevOverview from '../../components/dev/DevOverview';
import Analytics from '../../components/analytics/Analytics';
import DevSearch from '../../components/dev/DevSearch';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import EventItem from '../../components/events/EventItem';
// Fetch
import { getEventsLog } from '../../utils/Fetch';

function DeveloperPanel() {
  const { user } = useContext(UserContext);
  // Events
  const [allEvents, setAllEvents] = useState([]);
  // Display items
  const [displayOverview, setDisplayOverview] = useState(false);
  const [displayAnalytics, setDisplayAnalytics] = useState(false);
  const [displayEvents, setDisplayEvents] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayFixed, setDisplayFixed] = useState(true);
  const [selectedNavElement, setSelectedNavElement] = useState('overview');

  useEffect(() => {
    getEventsLog(setAllEvents);
  }, []);

  return (
    <>
      <div className='bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] lg:grid-rows-reg overflow-hidden'>
          {/* Titles */}
          <div className='text-left ml-2 mt-4 mb-1 lg:mx-6'>
            <h1 className='font-bold text-xl'>
              Developer Panel: {user.firstName} {user.lastName}
            </h1>
          </div>
          {/* Main Container */}
          <section className='interaction__container'>
            {/* Left */}
            <section className='grid lg:grid-rows-reg'>
              {/* Nav */}
              <nav className='p-2 lg:mr-4 lg:mb-4 border-b-2 border-hover-text border-solid mb-4'>
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
                      setDisplayAnalytics(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplayAnalytics(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('analytics')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Analytics
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDisplayEvents(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplayEvents(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('events')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Events
                  </li>
                  <li
                    onMouseEnter={() => {
                      setDisplaySearch(true);
                      setDisplayFixed(false);
                    }}
                    onMouseLeave={() => {
                      setDisplaySearch(false);
                      setDisplayFixed(true);
                    }}
                    onClick={() => setSelectedNavElement('search')}
                    className='cursor-pointer text-active-text hover:text-hover-text active:text-active-text'
                  >
                    Search
                  </li>
                </ul>
              </nav>
              {/* Content */}
              <section className='my-2'>
                {displayOverview && <DevOverview />}
                {displayAnalytics && <Analytics />}
                {displayEvents && <EventsContainer events={allEvents} />}
                {displaySearch && <DevSearch />}
                {selectedNavElement === 'overview' && displayFixed === true && (
                  <DevOverview />
                )}
                {selectedNavElement === 'analytics' &&
                  displayFixed === true && <Analytics />}
                {selectedNavElement === 'events' && displayFixed === true && (
                  <EventsContainer events={allEvents} />
                )}
                {selectedNavElement === 'search' && displayFixed === true && (
                  <DevSearch />
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
                  <div className='grid max-h-[300px] lg:max-h-none lg:items-center overflow-scroll overflow-x-hidden bg-main-colour w-full'>
                    {allEvents.length < 1 ? (
                      <div className='grid grid-rows-1 justify-center'>
                        <allNotifications
                          height={'h-6 lg:h-12'}
                          width={'w-6 lg:w-12'}
                        />
                      </div>
                    ) : (
                      <div>center of whatever</div>
                    )}
                  </div>
                  <div className='max-h-[300px] lg:max-h-none overflow-scroll overflow-x-hidden bg-main-colour'></div>
                </section>
                <section className='grid lg:grid-rows-reg border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 h-min border-black border-solid pl-2 py-1 bg-main-colour lg:bg-white'>
                    Events
                  </h3>
                  <div className='grid max-h-[300px] lg:max-h-none lg:items-center overflow-scroll overflow-x-hidden bg-main-colour w-full'>
                    {allEvents.length < 1 ? (
                      <div className='grid grid-rows-1 justify-center'>
                        <LoadingSpinner
                          height={'h-6 lg:h-12'}
                          width={'w-6 lg:w-12'}
                        />
                      </div>
                    ) : (
                      <ul className='grid grid-rows-one lg:max-h-[500px] h-fit'>
                        {allEvents.map((event, index) => {
                          return <EventItem event={event} key={index} />;
                        })}
                      </ul>
                    )}
                  </div>
                  <div className='max-h-[300px] lg:max-h-none overflow-scroll overflow-x-hidden bg-main-colour'></div>
                </section>
              </section>
              {/* Favorites */}
              <section className='lg:grid border-2 border-black border-solid rounded-sm p-1'>
                <div className='border-2 border-black border-solid rounded-sm overflow-hidden'>
                  <h3 className='border-b-2 border-black border-solid pl-2 py-1'>
                    TODO
                  </h3>
                </div>
              </section>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default DeveloperPanel;
