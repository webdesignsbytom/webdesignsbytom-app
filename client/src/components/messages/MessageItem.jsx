import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// Icons
import EyeIcon from '../../assets/svg/eye.svg';
import BinIcon from '../../assets/svg/bin.svg';

function MessageItem({ message }) {
  const { user } = useContext(UserContext);
  const { subject, content, viewed, starred, createdAt } = message;
  const navigate = useNavigate();

  const openMessage = () => {
    navigate(`/user/${user.id}/messages/${message.id}`, {
      state: message,
    });
  };

  return (
    <li
      onClick={openMessage}
      className='grid grid-flow-row mb-[1px] cursor-pointer bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded lg:rounded-none max-w-full w-full leading-3'
    >
      <article>
        <div className='flex justify-between border-b-2 border-solid border-black p-1 text-xs'>
          <div className='flex w-full justify-between'>
            <p>Subject: {subject}</p>
            <p>Date: {createdAt}</p>
          </div>
        </div>
        <section className='flex justify-between p-1'>
          <div>
            <p className='lg:text-sm'>{content}</p>
          </div>
          <div className='flex'>
            <img
              // onClick={() => markSeen(id)}
              src={EyeIcon}
              className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
              alt='seen button'
            />
            <img
              // onClick={() => deleteNotification(id)}
              src={BinIcon}
              className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
              alt='delete button'
            />
          </div>
        </section>
      </article>
    </li>
  );
}

export default MessageItem;
