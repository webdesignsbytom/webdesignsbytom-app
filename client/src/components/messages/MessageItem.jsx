import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg';

function MessageItem({ message }) {
  const { subject, content, sentFromId, userId, viewed, starred, createdAt } =
    message;

  return (
    <li className='grid bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded mb-2'>
      <article>
        <div className='flex justify-between border-b-2 border-solid border-black p-1 text-xs'>
          <p>Subject: {subject}</p>
          <p>Date {createdAt}</p>
        </div>
        <section className='flex justify-between p-1'>
          <div>
            <p>Content: {content}</p>
          </div>
          <div>
            <img
              src={closeCross}
              className='w-6 h-6 cursor-pointer'
              alt='close cross'
            />
          </div>
        </section>
      </article>
    </li>
  );
}

export default MessageItem;
