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
  const [displayNotifications, setDisplayNotifications] = useState('new-notifications');

  useEffect(() => {
    getUnseenNotifications(setNotifications, user.id);
  }, [])

  const handleSelect = (event) => {
    const { id } = event.target;
    if (id === 'all-notifications') {
      getUserNotifications(setNotifications, user.id);
      setDisplayNotifications('all-notifications')
    }
    if (id === 'seen-notifications') {
      getSeenNotifications(setNotifications, user.id);
      setDisplayNotifications('seen-notifications')
    }
    if (id === 'new-notifications') {
      getUnseenNotifications(setNotifications, user.id);
      setDisplayNotifications('new-notifications')
    }
  };

  return (
    <>
      <div>
        <div className='flex m-2 justify-between'>
          <div>
            <h2>Notifications</h2>
          </div>
          <Selector handleSelect={handleSelect} displayNotifications={displayNotifications} />
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
