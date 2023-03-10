import React from 'react'
import NoteItem from '../NoteItem';

function AllNotes({ allNotifications, markSeen, deleteNotification}) {
  return (
    <>
    <div>All Notes</div>

    {allNotifications.map((notification, index) => {
      return (
        <>
          <NoteItem key={index} notification={notification} />
        </>
      );
    })}
  </>
  )
}

export default AllNotes