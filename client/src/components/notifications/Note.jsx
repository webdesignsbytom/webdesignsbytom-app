import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg';
// Fetch
import { putSetNotificationViewed } from '../../utils/Fetch';

function Note({ notification, notifications, setNotifications }) {
  const { content, type, createdAt, id } = notification;

  const markAsSeen = () => {
    console.log('marked as seen');
    putSetNotificationViewed(id);

    const found = notifications.find((e) => e.id === id);
    console.log('found', found);

    setNotifications([
      ((current) => current.filter((e) => e.id === id))
    ])
  };

  return (
    <>
      <div className='flex border-2 border-solid border-black rounded p-1'>
        <p>{content}</p>
        <p>{type}</p>
        <p>{createdAt}</p>
        <img
          onClick={markAsSeen}
          src={closeCross}
          className='w-6 h-6 cursor-pointer'
          alt='close cross'
        />
      </div>
    </>
  );
}

export default Note;
