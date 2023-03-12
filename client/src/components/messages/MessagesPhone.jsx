import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import MessageItem from './MessageItem';

import client from '../../utils/client';

function MessagesPhone() {
  const { user } = useContext(UserContext);
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
  

  return (
    <>
      <div>
        <div className='flex mx-2 my-4 justify-between border-b-2 border-black border-solid pb-4'>
          <div className='flex align-middle font-bold pt-1'>
            <h2>Messages</h2>
          </div>
        </div>
        {/* Notification list */}
        <main className='grid gap-2 mx-2 lg:mx-6'>
          <ul>
            {userMessages.length > 0 &&
              userMessages.map((message, index) => {
                return (
                  <li className='mb-2' key={index} onClick={() => openMessage(message)}>
                    <MessageItem message={message} />
                  </li>
                )
              })}
          </ul>
        </main>
      </div>
    </>
  );
}

export default MessagesPhone;
