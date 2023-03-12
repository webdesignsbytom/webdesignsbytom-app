import React from 'react';

function Selector({ selectAll, selectNew, displayContacts }) {
  return (
    <>
      <form>
        <ul className='grid w-fit gap-2 grid-cols-2'>
          <li>
            <input
              type='radio'
              id='all-contacts'
              name='hosting'
              value='all-contacts'
              className='hidden peer'
              onChange={selectAll}
            />
            <label
              htmlFor='all-contacts'
              className={
                displayContacts === 'all-contacts'
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
              id='new-contacts'
              name='hosting'
              value='new-contacts'
              className='hidden peer'
              onChange={selectNew}
            />
            <label
              htmlFor='new-contacts'
              className={
                displayContacts === 'new-contacts'
                  ? 'active__select'
                  : 'inactive__select'
              }
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
