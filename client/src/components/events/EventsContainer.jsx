import React from 'react';
// Components
import EventItem from './EventItem';

function EventsContainer({ events }) {
  return (
    <>
      <ul className='w-full'>
        {events.map((event, index) => {
          return <EventItem event={event} key={index} />;
        })}
      </ul>
    </>
  );
}

export default EventsContainer;
