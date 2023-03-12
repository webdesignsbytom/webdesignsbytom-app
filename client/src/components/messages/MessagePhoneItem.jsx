import React from 'react';
import { useLocation } from 'react-router-dom';
// Icons
import closeCross from '../../img/closeCross.svg';
import backArrow from '../../img/backArrow.svg';

function MessagePhoneItem() {
  const location = useLocation();
  const { subject, content, sentFromId, createdAt } = location.state;

  const goBack = () => {
    console.log('go back')
  }

  return (
    <>
      <div className='h-screen grid grid-rows-reg mb-16'>
        {/* Small nav */}
        <nav className='p-2 bg-main-colour flex justify-between'>
          <div>
            <img
            onClick={goBack}
              src={backArrow}
              className='w-6 h-6 cursor-pointer'
              alt='close cross'
            />
          </div>
          <div><h2>Messages</h2></div>
          <div>SX</div>
        </nav>
        <article className='grid bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded'>
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
      </div>
    </>
  );
}

export default MessagePhoneItem;
