import React from 'react';
// Icons
import EyeIcon from '../../assets/img/eye.svg';
import BinIcon from '../../assets/img/bin.svg';

function EventItem({ event }) {
  const { type, topic, code, content, createdById, receivedById, createdAt } =
    event;

  return (
    <>
      <li className='grid grid-flow-row mb-[1px] bg-colour-pale dark:bg-black dark:text-white border-2 border-solid border-black rounded lg:rounded-none max-w-full w-full'>
        <section className='border-black border-b-2 border-solid '>
          <div className='grid grid-cols-1p1 mx-1 align-middle text-sm'>
            <h3 className='font-semibold'>{type}</h3>
            {code === 500 && <h3 className='text-red-600 font-semibold'>{code}</h3>}
            {(code === 400 || code === 401 || code === 404) && (
              <h3 className='text-orange-600 font-semibold'>{code}</h3>
            )}
            {(code === 200 || code === 201) && (
              <h3 className='text-green-600 font-semibold'>{code}</h3>
            )}
            <p className='text-right text-sm font-semibold'>{createdAt}</p>
          </div>
        </section>
        <article className='grid grid-cols-2a m-1'>
          <section className='grid h-fit w-auto text-xs leading-tight'>
            <h5 className='font-semibold'>Topic: <span className='font-normal capitalize'>{topic}</span></h5>
            <p className='font-normal'>{content}</p>
          </section>
          <article className='grid h-fit truncate text-xs leading-tight text-clip'>
            <h6 className='font-semibold'>
              CreatedBy: <span className='font-normal'>{createdById}</span>
            </h6>
            <h6 className='font-semibold'>
              RecievedBy: <span className='font-normal'>{receivedById}</span>
            </h6>
          </article>
          <div className='flex'>
            <img
              src={EyeIcon}
              className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
              alt='seen button'
            />
            <img
              src={BinIcon}
              className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none focus:scale-125 hover:scale-125 active:scale-125'
              alt='delete button'
            />
          </div>
        </article>
      </li>
    </>
  );
}

export default EventItem;
