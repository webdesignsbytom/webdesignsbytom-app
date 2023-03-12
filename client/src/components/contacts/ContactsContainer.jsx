import React from 'react';
// Components
import ContactItem from './ContactItem';

function ContactsContainer({ contacts }) {
  return (
    <>
      <ul>
        {contacts.map((contact, index) => {
          return <ContactItem contact={contact} key={index} />;
        })}
      </ul>
    </>
  );
}

export default ContactsContainer;
