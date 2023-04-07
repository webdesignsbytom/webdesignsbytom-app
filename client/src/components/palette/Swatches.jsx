import React from 'react';

function Swatches() {
  return (
    <section className='h-min'>
      <div className='px-2'>
        <h4>Cool Slate</h4>
        <article className='grid grid-cols-6 border-solid border-black dark:border-gray-100 border-[1px]'>
          <div className='h-6 bg-slate-700'></div>
          <div className='h-6 bg-slate-300'></div>
          <div className='h-6 bg-slate-200'></div>
          <div className='h-6 bg-slate-500'></div>
          <div className='h-6 bg-white'></div>
          <div className='h-6 bg-black'></div>
        </article>
      </div>
      <div className='px-2'>
        <h4>Warm Yellow</h4>
        <article className='grid grid-cols-6 border-solid border-black dark:border-gray-100 border-[1px]'>
          <div className='h-6 bg-yellow-700'></div>
          <div className='h-6 bg-yellow-300'></div>
          <div className='h-6 bg-yellow-200'></div>
          <div className='h-6 bg-yellow-500'></div>
          <div className='h-6 bg-white'></div>
          <div className='h-6 bg-black'></div>
        </article>
      </div>
      <div className='px-2'>
        <h4>Natural Green</h4>
        <article className='grid grid-cols-6 border-solid border-black dark:border-gray-100 border-[1px]'>
          <div className='h-6 bg-green-700'></div>
          <div className='h-6 bg-green-300'></div>
          <div className='h-6 bg-green-200'></div>
          <div className='h-6 bg-green-500'></div>
          <div className='h-6 bg-white'></div>
          <div className='h-6 bg-black'></div>
        </article>
      </div>
      <div className='px-2'>
        <h4>Deep Red</h4>
        <article className='grid grid-cols-6 border-solid border-black dark:border-gray-100 border-[1px]'>
          <div className='h-6 bg-red-700'></div>
          <div className='h-6 bg-red-300'></div>
          <div className='h-6 bg-red-200'></div>
          <div className='h-6 bg-red-500'></div>
          <div className='h-6 bg-white'></div>
          <div className='h-6 bg-black'></div>
        </article>
      </div>
      <div className='px-2'>
        <h4>Ocean Blue</h4>
        <article className='grid grid-cols-6 border-solid border-black dark:border-gray-100 border-[1px]'>
          <div className='h-6 bg-blue-700'></div>
          <div className='h-6 bg-blue-300'></div>
          <div className='h-6 bg-blue-200'></div>
          <div className='h-6 bg-blue-500'></div>
          <div className='h-6 bg-white'></div>
          <div className='h-6 bg-black'></div>
        </article>
      </div>
    </section>
  );
}

export default Swatches;
