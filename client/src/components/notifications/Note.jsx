import React from 'react';

function Note({ notification }) {
  const { content, type, createdAt, viewed } = notification;
  return (
    <>
      <div className='flex'>
        <p>{content}</p>
        <p>{type}</p>
        <p>{createdAt}</p>
      </div>
    </>
  );
}

export default Note;
