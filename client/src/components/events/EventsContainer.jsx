import React from 'react';
// Components
import EventItem from './EventItem';

function EventsContainer({ events }) {
  return (
    <>
      <ul className='grid grid-rows-one lg:max-h-[500px] h-fit overflow-x-hidden overflow-scroll'>
        {events.map((event, index) => {
          return <EventItem event={event} key={index} />;
        })}
      </ul>
    </>
  );
}

export default EventsContainer;
