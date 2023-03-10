import React from 'react'
import NoteItem from '../NoteItem';

function SeenNote({ viewedNotifications, markSeen, deleteNotification}) {
  return (
    <>
    <div>Seen Notes</div>

    {viewedNotifications.map((notification, index) => {
      return (
        <>
          <NoteItem key={index} notification={notification} />
        </>
      );
    })}
  </>
  )
}

export default SeenNote