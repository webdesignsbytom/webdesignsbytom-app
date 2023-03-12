import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg';

function NoteItem({ notification, markSeen, deleteNotification }) {
  const { content, type, createdAt, id } = notification;

  console.log('content', content);

  return (
    <>
      <article className='grid bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded'>
        <div className='flex justify-between border-b-2 border-solid border-black p-1 text-xs'>
          <p>Type: {type}</p>
          <p>Date {createdAt}</p>
        </div>
        <section className='flex justify-between p-1'>
          <div>
            <p>Content: {content}</p>
          </div>
          <div>
            <img
              onClick={() => markSeen(id)}
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
