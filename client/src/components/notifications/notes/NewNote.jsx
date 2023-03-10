import React from 'react';
import NoteItem from '../NoteItem';

function NewNote({ unSeenNotifications, markSeen, deleteNotification }) {
  console.log('unseen', unSeenNotifications);
  return (
    <>
      {unSeenNotifications.map((notification, index) => {
        return (
          <>
            <NoteItem key={index} notification={notification} markSeen={markSeen} deleteNotification={deleteNotification} />
          </>
        );
      })
      }
    </>
  );
}

export default NewNote;
