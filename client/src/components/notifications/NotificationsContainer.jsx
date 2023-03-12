import React from 'react';
import NoteItem from './NoteItem';
function NotificationsContainer({ notifications, markSeen, deleteNotification }) {
console.log('AA ', notifications)
  return (
    <>
      {notifications.map((notification, index) => {
        return (
          <>
            <NoteItem key={index} notification={notification} markSeen={markSeen} deleteNotification={deleteNotification} />
          </>
        );
      })}
    </>
  );
}

export default NotificationsContainer;