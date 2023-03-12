import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import client from '../../utils/client';
import MessageItem from './MessageItem';

function MessagesComponent() {
  const { user } = useContext(UserContext);
  const [userMessages, setUserMessages] = useState([]);
  console.log('userMessages', userMessages);

  useEffect(() => {
    client
      .get(`/messages/user-messages/${user.id}`)
      .then((res) => {
        console.log('response', res.data);
        setUserMessages(res.data.data.messages);
      })
      .catch((err) => {
        console.error('Unable to mark notification as seen', err);
      });
  }, [user.id]);

  return (
    <>
      <section className='grid max-h-[300px] border-2 border-black border-solid overflow-hidden'>
        <div>
          <h3>Messages</h3>
        </div>
        <section>
          <ul>
            {userMessages.length > 0 &&
              userMessages.map((message, index) => {
                return <MessageItem key={index} message={message} />;
              })}
          </ul>
        </section>
      </section>
    </>
  );
}

export default MessagesComponent;
