import React from 'react';

function ContactItem({ contact }) {
  const { email, phone, firstName, lastName, country, message, createdAt } =
    contact;

  return (
    <>
      <li className='grid grid-flow-row mb-2 bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded max-w-full w-full'>
        <section className='border-black border-b-2 border-solid '>
          <div className='mx-1 flex justify-between align-middle text-sm'>
            <h4 className=''>
              {firstName} {lastName}
            </h4>
            <p className='text-sm'>{createdAt}</p>
          </div>
        </section>
        <article className='grid h-min'>
          <section className='flex justify-between px-1 pt-1 w-auto text-xs leading-tight'>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
          </section>
          <article className='grid px-1 pb-1 truncate text-xs leading-tight text-clip'>
            <p className=''>{message}</p>
          </article>
        </article>
      </li>
    </>
  );
}

export default ContactItem;
