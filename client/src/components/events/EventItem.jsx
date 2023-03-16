import React from 'react';

function EventItem({ event }) {
  const { type, topic, code, content, createdById, receivedById, createdAt } = event;

  return (
    <>
      <li className='grid grid-flow-row mb-[1px] bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded max-w-full w-full'>
        <section className='border-black border-b-2 border-solid '>
          <div className='mx-1 flex justify-between align-middle text-sm'>
            <h6 className='w-[90px]'>{type}</h6>
            <h6>{code}</h6>
            <p className='text-sm'>{createdAt}</p>
          </div>
        </section>
        <article className='grid grid-flow-col m-1'>
          <section className='grid w-auto text-xs leading-tight'>
            <h6>Topic: {topic}</h6>
            <p>Content: {content}</p>
          </section>
          <article className='grid w-auto truncate text-xs leading-tight text-clip'>
            <h6>CreatedBy:</h6>
            <p className='w-id'>{createdById}</p>
            <h6>RecievedBy:</h6>
            <p className='w-id'>{receivedById}</p>
          </article>
          <div className='grid flex-wrap break-normal w-min'></div>
        </article>
      </li>
    </>
  );
}

export default EventItem;
