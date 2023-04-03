import React from 'react';

function Selector({ selectViewed, selectAll, selectNew, displayNotifications }) {
  
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
              onChange={selectAll}
            />
            <label
              htmlFor='all-notifications'
              className={displayNotifications === 'all-notifications' ? 'active__select' : 'inactive__select'}
            >
              <div className='block'>
                <div className='w-full select-none no__highlights'>All</div>
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
              onChange={selectViewed}
            />
            <label
              htmlFor='seen-notifications'
              className={displayNotifications === 'seen-notifications' ? 'active__select' : 'inactive__select'}
            >
              <div className='block'>
                <div className='w-full select-none no__highlights'>Seen</div>
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
              onChange={selectNew}
            />
            <label
              htmlFor='new-notifications'
              className={displayNotifications === 'new-notifications' ? 'active__select' : 'inactive__select'}

            >
              <div className='block'>
                <div className='w-full select-none no__highlights'>New</div>
              </div>
            </label>
          </li>
        </ul>
      </form>
    </>
  );
}

export default Selector;
