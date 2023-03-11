import React from 'react';

function Selector({ selectViewed, selectAll, selectNew, displayEvents }) {
  return (
    <>
      <form>
        <ul className='grid w-fit gap-2 grid-cols-3'>
          <li>
            <input
              type='radio'
              id='all-events'
              name='hosting'
              value='all-events'
              className='hidden peer'
              onChange={selectAll}
            />
            <label
              htmlFor='all-events'
              className={
                displayEvents === 'all-events'
                  ? 'active__select'
                  : 'inactive__select'
              }
            >
              <div className='block'>
                <div className='w-full select-none'>All</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type='radio'
              id='error-events'
              name='hosting'
              value='error-events'
              className='hidden peer'
              onChange={selectViewed}
            />
            <label
              htmlFor='error-events'
              className={
                displayEvents === 'error-events'
                  ? 'active__select'
                  : 'inactive__select'
              }
            >
              <div className='block'>
                <div className='w-full select-none'>Error</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type='radio'
              id='new-events'
              name='hosting'
              value='new-events'
              className='hidden peer'
              onChange={selectNew}
            />
            <label
              htmlFor='new-events'
              className={
                displayEvents === 'new-events'
                  ? 'active__select'
                  : 'inactive__select'
              }
            >
              <div className='block'>
                <div className='w-full select-none'>200</div>
              </div>
            </label>
          </li>
        </ul>
      </form>
    </>
  );
}

export default Selector;
