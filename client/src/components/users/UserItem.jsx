import React from 'react';
// Icons
import BinIcon from '../../img/bin.svg';
import EyeIcon from '../../img/eye.svg';

function UserItem({ user }) {
  const { id, firstName, lastName, country, email, createdAt } = user;

  return (
    <>
      <li className='grid grid-flow-row mb-[1px] dark:text-white border-2 border-solid border-black rounded max-w-full w-full'>
        <section className='border-black border-b-2 border-solid bg-white dark:bg-black'>
          <div className='mx-1 flex justify-between align-middle text-xs'>
            <h3>User ID: {id}</h3>
            <h4>Joined: {createdAt}</h4>
          </div>
        </section>
        <article className='grid grid-flow-col p-1 bg-colour-pale dark:bg-black'>
          <section className='grid grid-cols-3a gap-8 w-auto text-xs leading-tight'>
            <div>
              <h4 className='flex justify-between'>
                Name:{' '}
                <span>
                  {firstName} {lastName}
                </span>
              </h4>
            </div>
            <div>
              <h4 className='flex justify-between'>
                Email: <span>{email} </span>
              </h4>
            </div>
            <div>
              <h4 className='flex justify-between'>
                Country: <span>{country}</span>
              </h4>
            </div>
            <div className='flex gap-2 justify-end'>
              <img
                src={EyeIcon}
                alt='view user account'
                className='w-4 cursor-pointer transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
              />
              <img
                src={BinIcon}
                alt='delete user account'
                className='w-4 cursor-pointer transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
              />
            </div>
          </section>
        </article>
      </li>
    </>
  );
}

export default UserItem;
