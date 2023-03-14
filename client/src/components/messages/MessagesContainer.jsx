import React from 'react';
// Components
import MessageItem from './MessageItem';

function MessagesContainer({
  messages,
  markSeen,
  deleteMessage,
}) {
  return (
    <>
      <ul className='w-full'>
        {messages.map((message, index) => {
          return (
            <MessageItem
              key={index}
              message={message}
              markSeen={markSeen}
              deleteMessage={deleteMessage}
            />
          );
        })}
      </ul>
    </>
  );
}

export default MessagesContainer;
