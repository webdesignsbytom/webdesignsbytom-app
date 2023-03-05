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
  // Tell which one to display
  const [displayNotifications, setDisplayNotifications] =
    useState('new-notifications');
  const [checkSeen, setCheckSeen] = useState(false);

  useEffect(() => {
    if (displayNotifications === 'all-notifications') {
      getUserNotifications(setNotifications, user.id);
    }

    if (displayNotifications === 'seen-notifications') {
      getSeenNotifications(setNotifications, user.id);
    }

    if (displayNotifications === 'new-notifications') {
      getUnseenNotifications(setNotifications, user.id);
    }
  }, [checkSeen, displayNotifications, user.id]);

  const handleSelect = (event) => {
    const { id } = event.target;
    if (id === 'all-notifications') {
      setDisplayNotifications('all-notifications');
    }
    if (id === 'seen-notifications') {
      setDisplayNotifications('seen-notifications');
    }
    if (id === 'new-notifications') {
      setDisplayNotifications('new-notifications');
    }
  };

  return (
    <>
      <div>
        <div className='flex m-2 justify-between'>
          <div>
            <h2>Notifications</h2>
          </div>
          <Selector
            handleSelect={handleSelect}
            displayNotifications={displayNotifications}
          />
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {notifications && notifications.length > 0 ? (
            notifications.map((notification, index) => {
              return (
                <Note
                  checkSeen={checkSeen}
                  setCheckSeen={setCheckSeen}
                  notification={notification}
                  notifications={notifications}
                  setNotifications={setNotifications}
                  key={index}
                />
              );
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
