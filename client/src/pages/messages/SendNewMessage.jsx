import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function SendNewMessage() {
  return (
    <div className='bg-white dark:bg-black h-[calc(100vh-98px)] lg:h-screen w-full'>
      <Navbar />
      {/* Main */}
      <main className='grid h-[calc(100vh-170px)] my-2 px-2 lg:grid-rows-reg overflow-hidden w-full'>
        <section className='grid border-2 border-black border-solid bg-red-400'></section>
      </main>
    </div>
  );
}

export default SendNewMessage;
