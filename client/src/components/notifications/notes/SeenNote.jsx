import React from 'react'
import NoteItem from '../NoteItem';

function SeenNote({ viewedNotifications, markSeen, deleteNotification}) {
  return (
    <>
    {viewedNotifications.map((notification, index) => {
      return (
        <>
          <NoteItem key={index} notification={notification} markSeen={markSeen} deleteNotification={deleteNotification} />
        </>
      );
    })}
  </>
  )
}

export default SeenNote