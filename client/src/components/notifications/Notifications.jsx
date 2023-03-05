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
import Note from './Note';
import Selector from './Selector';

function Notifications() {
  const { user } = useContext(UserContext);
  const [notifications, setNotifications] = useState([]);
  const [seenNotifications, setSeenNotifications] = useState([]);
  const [unseenNotifications, setUnseenNotifications] = useState([]);
  const [allNotifications, setAllNotifications] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState('unseen');

  console.log('seen', seenNotifications);
  console.log('unseenNotifications', unseenNotifications);
  console.log('allNotifications', allNotifications);

  useEffect(() => {
    getUserNotifications(setNotifications, user.id);
    getUserNotifications(setAllNotifications, user.id);
    getSeenNotifications(setSeenNotifications, user.id);
    getUnseenNotifications(setUnseenNotifications, user.id);
  }, []);

  useEffect(() => {
    setNotifications(allNotifications);
  }, []);

  const selectNotes = (event) => {
    const { id } = event.target;
    setDisplayNotifications(id);
  };

  const handleSelect = (event) => {
    console.log('SEKEC', event.target);
    const { name } = event.target;
    console.log('name', name);
  };

  return (
    <>
      <div>
        <div className='flex m-2 justify-between'>
          <div>
            <h2>Notifications</h2>
          </div>
          <Selector handleSelect={handleSelect} />
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {displayNotifications === 'unseen' &&
          unseenNotifications.length > 0 ? (
            unseenNotifications.map((notification, index) => {
              return <Note notification={notification} key={index} />;
            })
          ) : (
            <p>Nothing to display</p>
          )}

          {displayNotifications === 'new' && seenNotifications.length > 0 ? (
            seenNotifications.map((notification, index) => {
              return <Note notification={notification} key={index} />;
            })
          ) : (
            <p>Nothing to display</p>
          )}

          {displayNotifications === 'all' && allNotifications.length > 0 ? (
            allNotifications.map((notification, index) => {
              return <Note notification={notification} key={index} />;
            })
          ) : (
            <p>Nothing to display</p>
          )}
        </section>
      </div>
    </>
  );
}

export default Notifications;
