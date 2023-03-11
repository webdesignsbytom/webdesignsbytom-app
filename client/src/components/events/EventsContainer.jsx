import React from 'react';
import EventItem from './EventItem';

function EventsContainer({ events }) {
  return (
    <>
      {events.map((event, index) => {
        return (
          <>
            <EventItem key={index} event={event} />
          </>
        );
      })}
    </>
  );
}

export default EventsContainer;
