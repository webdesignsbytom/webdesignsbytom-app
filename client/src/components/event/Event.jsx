import React from 'react';

function Event({ event }) {
  return (
    <>
      <li className='grid grid-flow-row border-2 border-solid border-black rounded max-w-full w-full'>
        <section className='border-black border-b-2 border-solid '>
          <div className='mx-1 flex justify-between align-middle text-sm'>
            <h6>{event.type}</h6>
            <p className='text-sm'>{event.createdAt}</p>
          </div>
        </section>
        <article className='grid grid-flow-col m-1'>
          <section className='grid w-auto text-xs leading-tight'>
            <h6>Topic:</h6>
            <p>{event.topic}</p>
            <h6>
              Code:
              <span> {event.code}</span>
            </h6>
          </section>
          <article className='grid w-auto truncate text-xs leading-tight text-clip'>
            <h6>CreatedBy:</h6>
            <p className='w-id'>{event.createdById}</p>
            <h6>RecievedBy:</h6>
            <p className='w-id'>{event.recievedById}</p>
          </article>
          <div className='grid flex-wrap break-normal w-min'></div>
        </article>
      </li>
    </>
  );
}

export default Event;
