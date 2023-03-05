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
    getUserNotifications(setAllNotifications, user.id);
    getUnseenNotifications(setNotifications, user.id);
    getSeenNotifications(setSeenNotifications, user.id);
    getUnseenNotifications(setUnseenNotifications, user.id);
  }, []);

  const handleSelect = (event) => {
    const { id } = event.target;
    if (id === 'all-notifications') {
      getUserNotifications(setNotifications, user.id);
    }
    if (id === 'seen-notifications') {
      getSeenNotifications(setNotifications, user.id);
    }
    if (id === 'new-notifications') {
      getUnseenNotifications(setNotifications, user.id);
    }
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
          {notifications && 
            notifications.length > 0 ? (
              notifications.map((notification, index) => {
                return <Note notification={notification} notifications={notifications} setNotifications={setNotifications} key={index} />;
              })
            ) : (
              <p>Nothing to display</p>
            )
          }
          
        </section>
      </div>
    </>
  );
}

export default Notifications;
