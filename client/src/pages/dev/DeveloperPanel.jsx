import React, { useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Fetch
import { getEventsLog } from '../../utils/Fetch';

function DeveloperPanel() {
  const [eventLog, setEventLog] = useState([]);

  useEffect(() => {
    getEventsLog(setEventLog)
  }, []);

  console.log('event log', eventLog);
  return (
    <>
    <Navbar />
      <div>
        <h2>DeveloperPanel</h2>
        <div>
          <h4>Event Logs</h4>
          {eventLog?.length > 0 ? (
            <div>
              <ul>
                {eventLog?.map((event, index) => {
                  return (
                    <li key={index} className='grid grid-cols-6 gap-6'>
                      <h6>{event.type}</h6>
                      <p>{event.topic}</p>
                      <p>{event.code}</p>
                      <p>{event.createdById}</p>
                      <p>{event.recievedById}</p>
                      <p>{event.createdAt}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div>
              <p className='no_events_message'>
                There are no events to display at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DeveloperPanel;
