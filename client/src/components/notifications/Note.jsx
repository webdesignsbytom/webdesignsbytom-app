import React from 'react';
// Icons
import closeCross from '../../img/closeCross.svg'

function Note({ notification }) {
  const { content, type, createdAt, viewed } = notification;

  const markAsSeen = () => {
    console.log('marked as seen')
  }
  
  return (
    <>
      <div className='flex border-2 border-solid border-black rounded p-1'>
        <p>{content}</p>
        <p>{type}</p>
        <p>{createdAt}</p>
        <img onClick={markAsSeen} src={closeCross} className='w-6 h-6' alt="close cross" />
      </div>
    </>
  );
}

export default Note;
