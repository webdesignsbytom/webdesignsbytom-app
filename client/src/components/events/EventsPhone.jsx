import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Fetch
import {
  getUserNotifications,
  getSeenNotifications,
  getUnseenNotifications,
} from '../../utils/Fetch';
// Components
import Selector from './Selector';
import client from '../../utils/client';
import Event from './EventItem';
import EventsContainer from './EventsContainer';

function EventsPhone() {
  const { user } = useContext(UserContext);

  const [allEvents, setAllEvents] = useState([]);
  const [viewedEvents, setViewedEvents] = useState([]);
  const [unSeenEvents, setUnSeenEvents] = useState([]);
  const [displayEvents, setDisplayEvents] = useState('all-events');

  const [deletedEvent, setDeletedEvent] = useState({});

  console.log('display events', displayEvents);
  useEffect(() => {
    client
      .get(`/events`)
      .then((res) => {
        console.log('response', res.data);
        setAllEvents(res.data.data.events);
      })
      .catch((err) => {
        console.error('Unable to get events', err);
      });
  }, []);

  const selectViewed = (event) => {
    const { id } = event.target;
    console.log('id: ', id);
    setDisplayEvents(id);
  };

  const selectAll = (event) => {
    const { id } = event.target;
    console.log('id: ', id);
    setDisplayEvents(id);
  };

  const selectNew = (event) => {
    const { id } = event.target;
    console.log('id: ', id);
    setDisplayEvents(id);
  };

  return (
    <>
      <div>
        <div className='flex mx-2 my-4 justify-between border-b-2 border-black border-solid pb-4'>
          <div className='flex align-middle font-bold pt-1'>
            <h2>Events</h2>
          </div>
          <Selector
            selectViewed={selectViewed}
            selectAll={selectAll}
            selectNew={selectNew}
          />
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {displayEvents === 'new-events' && (
            <EventsContainer events={unSeenEvents} />
          )}
          {displayEvents === 'seen-events' && (
            <EventsContainer events={viewedEvents} />
          )}
          {displayEvents === 'all-events' && (
            <EventsContainer events={allEvents} />
          )}
        </section>
      </div>
    </>
  );
}

export default EventsPhone;
