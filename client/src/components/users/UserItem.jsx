import React from 'react';

function UserItem({ user }) {
  const { id } = user;

  return (
    <>
      <li className='grid grid-flow-row mb-2 bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded max-w-full w-full'>
        <section className='border-black border-b-2 border-solid '>
          <div className='mx-1 flex justify-between align-middle text-sm'>
            <h3>{id}</h3>
          </div>
        </section>
        <article className='grid grid-flow-col m-1'>
          <section className='grid w-auto text-xs leading-tight'></section>
          <article className='grid w-auto truncate text-xs leading-tight text-clip'></article>
          <div className='grid flex-wrap break-normal w-min'></div>
        </article>
      </li>
    </>
  );
}

export default UserItem;
