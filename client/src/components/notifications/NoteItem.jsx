import React from 'react';
// Icons
import EyeIcon from '../../img/eye.svg';
import BinIcon from '../../img/bin.svg';

function NoteItem({ notification, markSeen, deleteNotification }) {
  const { content, type, createdAt, id } = notification;

  return (
    <>
      <li className='grid grid-flow-row mb-[1px] bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded lg:rounded-none max-w-full w-full leading-3'>
        <article className='grid'>
          <div className='flex justify-between border-b-2 border-solid border-black p-1 text-xs'>
            <p>Type: {type}</p>
            <p>Date {createdAt}</p>
          </div>
          <section className='flex justify-between p-1'>
            <div>
              <p className='lg:text-sm'>{content}</p>
            </div>
            <div className='flex'>
              <img
                onClick={() => markSeen(id)}
                src={EyeIcon}
                className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
                alt='seen button'
              />
              <img
                onClick={() => deleteNotification(id)}
                src={BinIcon}
                className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
                alt='delete button'
              />
            </div>
          </section>
        </article>
      </li>
    </>
  );
}

export default NoteItem;
