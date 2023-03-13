import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg';
import heart from '../../img/heart.svg';
import eyeIcon from '../../img/eye.svg';

function MessageItem({ message }) {
  const { subject, content, sentFromId, userId, viewed, starred, createdAt } =
    message;

  return (
    <li className='grid bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded mb-[1px] leading-3 cursor-pointer'>
      <article>
        <div className='flex justify-between border-b-2 border-solid border-black p-1 text-xs'>
          <div className='flex w-full justify-between'>
            <p>Subject: {subject}</p>
            <p>Date: {createdAt}</p>
          </div>
          <div className='flex'>
            {starred && <img src={heart} alt='favorite' />}
            {viewed && <img src={eyeIcon} alt='seen' />}
          </div>
        </div>
        <section className='flex justify-between p-1'>
          <div>
            <p>{content}</p>
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
