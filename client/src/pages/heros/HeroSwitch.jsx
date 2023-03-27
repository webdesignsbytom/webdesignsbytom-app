import React from 'react';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

function HeroSwitch() {
  return (
    <section className='grid justify-center'>
      <article className='flex justify-center text-white font-semibold'>
        <p>This is one of many landing pages i have designed.</p>
        <p>Use the controls below to move through the options.</p>
      </article>
      <section className='flex items-center justify-center gap-4 py-4'>
        <section className='bg-black rounded-full p-2 cursor-pointer text-white hover:animate-pulse'><HiArrowSmLeft size={50} /></section>
        <section>Current</section>
        <section className='bg-black rounded-full p-2 cursor-pointer text-white hover:animate-pulse'><HiArrowSmRight size={50} /></section>
      </section>
    </section>
  );
}

export default HeroSwitch;
