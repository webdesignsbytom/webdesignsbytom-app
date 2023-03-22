import React from 'react';
// Icons
import BinIcon from '../../assets/img/bin.svg';
import EyeIcon from '../../assets/img/eye.svg';

function UserItem({ user }) {
  const { id, firstName, lastName, country, email, createdAt } = user;

  return (
    <>
      <li className='grid grid-flow-row mb-[1px] dark:text-white border-2 border-solid border-black rounded max-w-full w-full overflow-hidden'>
        <section className='border-black border-b-2 border-solid bg-white dark:bg-black'>
          <div className='grid mx-1 lg:flex justify-between align-middle text-xs'>
            <h3>User ID: {id}</h3>
            <h4>Joined: {createdAt}</h4>
          </div>
        </section>
        <article className='grid grid-flow-col p-1 bg-colour-pale dark:bg-black'>
          <section className='grid h-min lg:grid-cols-3a lg:gap-8 w-auto text-xs leading-tight'>
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
            <div className='flex gap-2 justify-end border-t-2 mt-1 border-solid border-black lg:border-none'>
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
