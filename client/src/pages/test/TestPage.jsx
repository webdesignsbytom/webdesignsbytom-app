import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import Selector from '../../components/notifications/Selector';
import client from '../../utils/client';
import closeCross from '../../img/closeCross.svg'
import { putSetNotificationViewed } from '../../utils/Fetch';
function TestPage() {
  const { user } = useContext(UserContext);
  const [notifications, setNotifications] = useState([]);
  // Tell which one to display
  const [displayNotifications, setDisplayNotifications] = useState('new-notifications');

  useEffect(() => {
    client
    .get(`/notifications/${user.id}/false`)
    .then((res) => {
      console.log('res', res.data)
      setNotifications(res.data.data.notifications);
    })
    .catch((err) => console.error('Unable to get unseen notifications', err.response));
  }, [notifications.length]);

  const handleSelect = (event) => {
    const { id } = event.target;
  };

  const markSeen = (id) => {
    console.log('marked as seen');
    putSetNotificationViewed(id)
  };

  return (
    <>
      <div>
        <div className='flex m-2 justify-between'>
          <div>
            <h2>TEST</h2>
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
                <>
                  <div key={index}>
                    {notification.type}
                    {notification.content}
                    <img
          onClick={markSeen}
          src={closeCross}
          className='w-6 h-6 cursor-pointer'
          alt='close cross'
        />
                  </div>
                </>
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

export default TestPage;
