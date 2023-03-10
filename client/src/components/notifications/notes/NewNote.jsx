import React from 'react';
import NoteItem from '../NoteItem';

function NewNote({ unSeenNotifications, markSeen, deleteNotification }) {
  console.log('unseen', unSeenNotifications);
  return (
    <>
      <div>New Notes</div>

      {unSeenNotifications.map((notification, index) => {
        return (
          <>
            <NoteItem key={index} notification={notification} />
          </>
        );
      })}
    </>
  );
}

export default NewNote;
