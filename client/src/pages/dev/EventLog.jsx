import React from 'react';
import Event from '../../components/event/Event';

function EventLog({ eventLog }) {
  return (
    <>
      <div>
        <h4>Event Logs</h4>
        {eventLog?.length > 0 ? (
          <div className='mx-2'>
            <ul className='grid gap-1 w-full max-w-full'>
              {eventLog?.map((event, index) => {
                return <Event key={index} event={event} />;
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
    </>
  );
}

export default EventLog;
