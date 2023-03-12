import React from 'react';

function ContactItem({ contact }) {
  const { email, phone, firstName, lastName, country, message, createdAt } = contact;

  return (
    <>
      <li className='grid grid-flow-row mb-2 bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded max-w-full w-full'>
        <section className='border-black border-b-2 border-solid '>
          <div className='mx-1 flex justify-between align-middle text-sm'>
            <h6 className='w-[90px]'>{email}</h6>
            <h6>{phone}</h6>
            <p className='text-sm'>{createdAt}</p>
          </div>
        </section>
        <article className='grid grid-flow-col m-1'>
          <section className='grid w-auto text-xs leading-tight'>
            <h6>Topic: {firstName}</h6>
            <p>Content: {message}</p>
          </section>
          <article className='grid w-auto truncate text-xs leading-tight text-clip'>
            <h6>CreatedBy:</h6>
            <p className='w-id'>{firstName}</p>
          </article>
          <div className='grid flex-wrap break-normal w-min'></div>
        </article>
      </li>
    </>
  );
}

export default ContactItem;
