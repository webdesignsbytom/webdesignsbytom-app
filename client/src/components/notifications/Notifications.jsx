import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Fetch
import { getUserNotifications } from '../../utils/Fetch';
// Components
import Note from './Note';

function Notifications() {
  const { user } = useContext(UserContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getUserNotifications(setNotifications, user.id);
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Notifications</h2>
        </div>
        {/* Notification list */}
        <section>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => {
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
