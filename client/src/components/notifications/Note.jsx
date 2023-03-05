import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg';
import { putSetNotificationViewed } from '../../utils/Fetch';

function Note({ notification, notifications, setNotifications }) {
  const { content, type, createdAt, id } = notification;

  const markAsSeen = (id) => {
    console.log('marked as seen');
    putSetNotificationViewed(id);
  };

  return (
    <>
      <div className='flex border-2 border-solid border-black rounded p-1'>
        <p>{content}</p>
        <p>{type}</p>
        <p>{createdAt}</p>
        <img
          onClick={() => markAsSeen(id)}
          src={closeCross}
          className='w-6 h-6 cursor-pointer'
          alt='close cross'
        />
      </div>
    </>
  );
}

export default Note;
