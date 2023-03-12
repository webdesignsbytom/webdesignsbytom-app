import React, { useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Fetch
import EventLog from './EventLog';
import client from '../../utils/client';

function DeveloperPanel() {
  const [eventLog, setEventLog] = useState([]);

  useEffect(() => {
    client
      .get(`/events`)
      .then((res) => {
        setEventLog(res.data.data.events);
      })
      .catch((err) => {
        console.error('Unable to get all events', err);
      });
  }, []);

  console.log('event log', eventLog);
  return (
    <>
      <div className='bg-white dark:bg-black min-h-screen max-w-full overflow-hidden'>
        <Navbar />
        <section>
          <div>
            <h2>DeveloperPanel</h2>
          </div>
          
          <EventLog eventLog={eventLog} />
        </section>
      </div>
    </>
  );
}

export default DeveloperPanel;
