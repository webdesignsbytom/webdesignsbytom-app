import React, { useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Fetch
import { getEventsLog } from '../../utils/Fetch';
import EventLog from './EventLog';

function DeveloperPanel() {
  const [eventLog, setEventLog] = useState([]);

  useEffect(() => {
    getEventsLog(setEventLog);
  }, []);

  console.log('event log', eventLog);
  return (
    <>
      <div className='bg-white dark:bg-black min-h-screen max-w-full overflow-hidden'>
        <Navbar />
        <div>
          <h2>DeveloperPanel</h2>
          <EventLog eventLog={eventLog} />
        </div>
      </div>
    </>
  );
}

export default DeveloperPanel;
