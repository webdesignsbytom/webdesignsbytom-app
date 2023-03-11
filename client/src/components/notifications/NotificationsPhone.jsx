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
import Note from './NoteItem';
import Selector from './Selector';
import client from '../../utils/client';
import NewNote from './notes/NewNote';
import SeenNote from './notes/SeenNote';
import AllNotes from './notes/AllNotes';

function NotificationsPhone() {
  const { user } = useContext(UserContext);

  const [allNotifications, setAllNotifications] = useState([]);
  const [viewedNotifications, setViewedNotifications] = useState([]);
  const [unSeenNotifications, setUnSeenNotifications] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState('new-notifications');

  const [createdSuccess, setCreatedSuccess] = useState({});
  const [markedSeenSuccess, setMarkedSeenSuccess] = useState({});
  const [deletedNote, setDeletedNote] = useState({});
  // For new note
  const [testForm, setTestForm] = useState({
    email: 'test@example.com',
    userId: 1,
    type: 'PURCHASE',
    content: 'testing',
  });

  useEffect(() => {
    client
      .get(`/notifications/user-notifications/${user.id}`)
      .then((res) => {
        setAllNotifications(res.data.data.notifications);
        const seenNotes = res.data.data.notifications.filter((notification) => notification.viewed === true);
        setViewedNotifications(seenNotes)
        const unseenNotes = res.data.data.notifications.filter((notification) => notification.viewed === false);
        setUnSeenNotifications(unseenNotes)
      })
      .catch((err) => {
        console.error('Unable to get notifications', err);
      });
  }, [deletedNote, createdSuccess, user.id]);

  const selectViewed = (event) => {
    const { id } = event.target
    console.log('id: ', id);
    setDisplayNotifications(id)
  };

  const selectAll = (event) => {
    const { id } = event.target
    console.log('id: ', id);

    setDisplayNotifications(id)
  };

  const selectNew = (event) => {
    const { id } = event.target
    console.log('id: ', id);
    setDisplayNotifications(id)
  };

  const markSeen = (noteId) => {
    console.log('NOTE', noteId);

    client
      .put(`/notifications/viewed/${noteId}`, testForm)
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
        <div className='flex mx-2 my-4 justify-between border-b-2 border-black border-solid pb-4'>
          <div className='flex align-middle font-bold pt-1'>
            <h2>Notifications</h2>
          </div>
          <Selector selectViewed={selectViewed} selectAll={selectAll} selectNew={selectNew} />
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {displayNotifications === 'new-notifications' && <NewNote unSeenNotifications={unSeenNotifications} markSeen={markSeen} deleteNotification={deleteNotification} />}
          {displayNotifications === 'seen-notifications' && <SeenNote viewedNotifications={viewedNotifications} markSeen={markSeen} deleteNotification={deleteNotification} />}
          {displayNotifications === 'all-notifications' && <AllNotes allNotifications={allNotifications} markSeen={markSeen} deleteNotification={deleteNotification} />}
        </section>
      </div>
    </>
  );
}

export default NotificationsPhone;
