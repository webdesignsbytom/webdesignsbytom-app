import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg';
import { putSetNotificationViewed } from '../../utils/Fetch';

function NoteItem({ notification }) {
  const { content, type, createdAt, id } = notification;

  console.log('content', content);

  const markAsSeen = (id) => {
    console.log('marked as seen');
    putSetNotificationViewed(id);
  };

  return (
    <>
      <article className='grid border-2 border-solid border-black rounded p-1'>
        <div className='flex justify-between'>
          <p>Type: {type}</p>
          <p>Date {createdAt}</p>
        </div>
        <section className='flex justify-between'>
          <div>
            <p>Content: {content}</p>
          </div>
          <div>
            <img
              onClick={() => markAsSeen(id)}
              src={closeCross}
              className='w-6 h-6 cursor-pointer'
              alt='close cross'
            />
          </div>
        </section>
      </article>
    </>
  );
}

export default NoteItem;
