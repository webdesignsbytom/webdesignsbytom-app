import React from 'react';
import NoteItem from '../NoteItem';

function AllNotes({ allNotifications, markSeen, deleteNotification }) {
  return (
    <>
      {allNotifications.map((notification, index) => {
        return (
          <>
            <NoteItem key={index} notification={notification} markSeen={markSeen} deleteNotification={deleteNotification}/>
          </>
        );
      })}
    </>
  );
}

export default AllNotes;
