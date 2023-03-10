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
import Selector from './Selector';
import client from '../../utils/client';

function Notifications() {
  const { user } = useContext(UserContext);

  const [allNotifications, setAllNotifications] = useState([]);
  const [viewedNotifications, setViewedNotifications] = useState([]);
  const [unSeenNotifications, setUnSeenNotifications] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState([]);

  const [createdSuccess, setCreatedSuccess] = useState({});
  const [markedSeenSuccess, setMarkedSeenSuccess] = useState({});
  const [deletedNote, setDeletedNote] = useState({});
  const [testForm, setTestForm] = useState({
    email: 'test@example.com',
    userId: 1,
    type: 'PURCHASE',
    content: 'testing',
  });

  console.log('allnotifications', allNotifications);
  console.log('viewedNotifications', viewedNotifications);
  console.log('unseennotifiucatio', unSeenNotifications);

  useEffect(() => {
    client
      .get(`/notifications`)
      .then((res) => {
        setAllNotifications(res.data.data.notifications);
        const seenNotes = res.data.data.notifications.filter(
          (notification) => notification.viewed === true
        );
        setViewedNotifications(seenNotes);
        const unseenNotes = res.data.data.notifications.filter(
          (notification) => notification.viewed === false
        );
        setUnSeenNotifications(unseenNotes);
        setDisplayNotifications(unseenNotes);
      })
      .catch((err) => {
        console.error('Unable to get notifications', err);
      });
  }, [deletedNote, createdSuccess, markedSeenSuccess]);

  const selectViewed = (event) => {
    setDisplayNotifications(viewedNotifications)
  };

  const selectAll = (event) => {
    setDisplayNotifications(allNotifications)
  };

  const selectNew = (event) => {
    setDisplayNotifications(unSeenNotifications)
  };

  const markSeen = (note) => {
    client
      .put(`/notifications/viewed/${note.id}`, testForm)
      .then((res) => {
        const newNote = allNotifications.filter(
          (note) => note.id === res.data.data.notification.id
        );
        newNote[0].viewed = true;
        setAllNotifications([...allNotifications, newNote[0]]);

        const newUnseenArray = unSeenNotifications.filter(
          (note) => note.id !== res.data.data.notification.id
        );
        setUnSeenNotifications(newUnseenArray);
        setViewedNotifications([newNote[0], ...viewedNotifications]);
        setMarkedSeenSuccess(res.data.data.notification)
      })
      .catch((err) => {
        console.error('Unable to mark notification as seen', err);
      });
  };

  const deleteNotification = (note) => {
    client
      .delete(`/notifications/delete/${note.id}`)
      .then((res) => {
        setDeletedNote(res.data.data.notification);
      })
      .catch((err) => {
        console.error('Unable to delete notification', err);
      });
  };

  return (
    <>
      <div>
        <div className='flex m-2 justify-between'>
          <div>
            <h2>Notifications</h2>
          </div>
          <Selector selectViewed={selectViewed} selectAll={selectAll} selectNew={selectNew} />
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {displayNotifications.length > 0 ? (
            displayNotifications.map((note, index) => {
              return (
                <>
                  <div
                    key={index}
                    className='grid grid-cols-3 border-2 border-solid border-black mb-2 mx-2'
                  >
                    <div>
                      <p>Note Id: {note.id}</p>
                      <p>Type: {note.type}</p>
                      <p className='text-red-500'>
                        Viewed: {JSON.stringify(note.viewed)}
                      </p>
                    </div>
                    <div>
                      <p>Content: {note.content}</p>
                      <p>UserId: {note.userId}</p>
                    </div>
                    <div>
                      <div
                        className='cursor-pointer border-2 border-solid border-black h-min p-2'
                        onClick={() => deleteNotification(note)}
                      >
                        Delete X
                      </div>
                      <div
                        className='cursor-pointer border-2 border-solid border-black h-min p-2'
                        onClick={() => markSeen(note)}
                      >
                        Mark Seen
                      </div>
                    </div>
                  </div>
                </>
              );
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
