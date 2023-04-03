import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import MessageItem from './MessageItem';

import client from '../../utils/axios/client';

function MessagesPhone() {
  const { user } = useContext(UserContext);
  const { setToggleMessages, setToggleNavigation } = useContext(ToggleContext)
  const [userMessages, setUserMessages] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/messages/user-messages/${user.id}`)
      .then((res) => {
        setUserMessages(res.data.data.messages);
      })
      .catch((err) => {
        console.error('Unable to mark notification as seen', err);
      });
  }, []);

  const openMessage = (message) => {
    navigate(`../user/${user.id}/messages/${message.id}`, { state: message });
  };

  const createNewMessage = () => {
    console.log('new messae')
    setToggleNavigation(false)
    setToggleMessages(false)
    navigate(`../user/messages/create-new`)
  }

  return (
    <>
      <div className='z-30'>
        <div className='flex mx-2 my-4 justify-between border-b-2 border-black border-solid pb-4'>
          <div className='flex align-middle font-bold pt-1'>
            <h2>Messages</h2>
          </div>
          <div className='pr-1'>
            <button
              onClick={createNewMessage}
              className='inline-flex border-2 items-center justify-center text-center w-full py-1 px-2 bg-non-selected border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              New
            </button>
          </div>
        </div>
        {/* Notification list */}
        <main className='grid gap-2 mx-2 lg:mx-6'>
          <ul>
            {userMessages.length > 0 &&
              userMessages.map((message, index) => {
                return (
                  <MessageItem
                    message={message}
                    key={index}
                    onClick={() => openMessage(message)}
                  />
                );
              })}
          </ul>
        </main>
      </div>
    </>
  );
}

export default MessagesPhone;
