import React from 'react';
// Components
import EventItem from './EventItem';

function EventsContainer({ events }) {
  return (
    <>
      <ul className='grid grid-rows-one max-h-[600px] lg:max-h-[500px] overflow-y-scroll'>
        {events.map((event, index) => {
          return <EventItem event={event} key={index} />;
        })}
      </ul>
    </>
  );
}

export default EventsContainer;
