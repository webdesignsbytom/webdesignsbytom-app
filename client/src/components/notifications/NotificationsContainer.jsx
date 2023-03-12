import React from 'react';
// Components
import NoteItem from './NoteItem';

function NotificationsContainer({
  notifications,
  markSeen,
  deleteNotification,
}) {
  return (
    <>
      <ul>
        {notifications.map((notification, index) => {
          return (
            <NoteItem
              key={index}
              notification={notification}
              markSeen={markSeen}
              deleteNotification={deleteNotification}
            />
          );
        })}
      </ul>
    </>
  );
}

export default NotificationsContainer;
