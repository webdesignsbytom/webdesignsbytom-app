import React from 'react';

function Selector({ handleSelect }) {
  
  return (
    <>
      <form>
        <ul className='grid w-fit gap-2 grid-cols-3'>
          <li>
            <input
              type='radio'
              id='all-notifications'
              name='hosting'
              value='all-notifications'
              className='hidden peer'
              onChange={handleSelect}
            />
            <label
              htmlFor='all-notifications'
              className='inline-flex border-2 items-center justify-center text-center w-full py-1 px-2 text-gray-500 bg-white border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <div className='block'>
                <div className='w-full select-none'>All</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type='radio'
              id='seen-notifications'
              name='hosting'
              value='seen-notifications'
              className='hidden peer'
              onChange={handleSelect}
            />
            <label
              htmlFor='seen-notifications'
              className='inline-flex border-2 items-center justify-center text-center w-full py-1 px-2 text-gray-500 bg-white border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <div className='block'>
                <div className='w-full select-none'>Seen</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type='radio'
              id='new-notifications'
              name='hosting'
              value='new-notifications'
              className='hidden peer'
              onChange={handleSelect}
            />
            <label
              htmlFor='new-notifications'
              className='inline-flex border-2 items-center justify-center text-center w-full py-1 px-2 text-gray-500 bg-white border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <div className='block'>
                <div className='w-full select-none'>New</div>
              </div>
            </label>
          </li>
        </ul>
      </form>
    </>
  );
}

export default Selector;
