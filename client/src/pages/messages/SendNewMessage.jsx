import React from 'react';
import Navbar from '../../components/nav/Navbar';

function SendNewMessage() {
  return (
    <section className='grid h-[calc(100vh-98px)] lg:h-screen lg:grid-rows-reg overflow-hidden border-2 border-black border-solid w-full'>
      <div className='w-full'>
        <Navbar />
      </div>
      SendNewMessage
    </section>
  );
}

export default SendNewMessage;
