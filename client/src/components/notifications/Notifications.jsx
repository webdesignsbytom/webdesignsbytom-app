import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Fetch
import {
  getUserNotifications,
  getSeenNotifications,
  getUnseenNotifications,
} from '../../utils/Fetch';
// Components
import Note from './Note';

function Notifications() {
  const { user } = useContext(UserContext);
  const [notifications, setNotifications] = useState([]);
  const [seenNotifications, setSeenNotifications] = useState([]);
  const [unseenNotifications, setUnseenNotifications] = useState([]);
  const [allNotifications, setAllNotifications] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState('unseen');

  console.log('seen', seenNotifications);
  console.log('unseenNotifications', unseenNotifications);
  console.log('allNotifications', allNotifications);

  useEffect(() => {
    getUserNotifications(setNotifications, user.id);
    getUserNotifications(setAllNotifications, user.id);
    getSeenNotifications(setSeenNotifications, user.id);
    getUnseenNotifications(setUnseenNotifications, user.id);
  }, []);

  useEffect(() => {
    setNotifications(allNotifications);
  }, []);

  const selectNotes = (event) => {
    const { id } = event.target
    setDisplayNotifications(id)
  };

  return (
    <>
      <div>
        <div className='flex m-2 justify-between'>
          <div>
            <h2>Notifications</h2>
          </div>
          <div
            className='peer grid w-auto grid-cols-3 space-x-1 rounded-xl bg-gray-200 p-2'
            x-data='app'
          >
            <div>
              <input
                type='radio'
                name='option'
                id='all'
                className='peer hidden'
                onChange={selectNotes}
              />
              <label
                htmlFor='all'
                aria-checked='false'
                className='block cursor-pointer select-none rounded-xl px-2 py-1 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
              >
                All
              </label>
            </div>

            <div>
              <input
                type='radio'
                name='option'
                id='seen'
                className='peer hidden'
                onChange={selectNotes}
              />
              <label
                htmlFor='seen'
                aria-checked='false'
                className='block cursor-pointer select-none rounded-xl px-2 py-1 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
              >
                Seen
              </label>
            </div>

            <div>
              <input
                aria-checked='true'
                type='radio'
                name='option'
                id='new'
                className='peer hidden'
                onChange={selectNotes}
              />
              <label
                htmlFor='new'
                className='block cursor-pointer select-none rounded-xl px-2 py-1 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
              >
                New
              </label>
            </div>
          </div>
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {displayNotifications === 'unseen' &&
          unseenNotifications.length > 0 ? (
            unseenNotifications.map((notification, index) => {
              return <Note notification={notification} key={index} />;
            })
          ) : (
            <p>Nothing to display</p>
          )}

          {displayNotifications === 'new' && seenNotifications.length > 0 ? (
            seenNotifications.map((notification, index) => {
              return <Note notification={notification} key={index} />;
            })
          ) : (
            <p>Nothing to display</p>
          )}

          {displayNotifications === 'all' && allNotifications.length > 0 ? (
            allNotifications.map((notification, index) => {
              return <Note notification={notification} key={index} />;
            })
          ) : (
            <p>Nothing to display</p>
          )}
        </section>
      </div>
    </>
  );
}

export default Notifications;
