import React, { useEffect, useState } from 'react';
// Components
import Selector from './Selector';
import ContactsContainer from './ContactsContainer';

import client from '../../utils/client';

function ContactsPhone() {
  const [allContacts, setAllContacts] = useState([]);
  const [displayContacts, setDisplayContacts] = useState('all-contacts');

  const [deletedContact, setDeletedContact] = useState({});
  
  useEffect(() => {
    client
      .get(`/contacts`)
      .then((res) => {
        console.log('response', res.data);
        setAllContacts(res.data.data.contacts);
      })
      .catch((err) => {
        console.error('Unable to get contacts', err);
      });
  }, []);

  const selectViewed = (contact) => {
    const { id } = contact.target;
    setDisplayContacts(id);
  };

  const selectAll = (contact) => {
    const { id } = contact.target;
    setDisplayContacts(id);
  };

  const selectNew = (contact) => {
    const { id } = contact.target;
    setDisplayContacts(id);
  };

  return (
    <>
      <section>
        <div className='flex mx-2 my-4 justify-between border-b-2 border-black border-solid pb-4'>
          <div className='flex align-middle font-bold pt-1'>
            <h2>Contact Messages</h2>
          </div>
          <Selector
            selectViewed={selectViewed}
            selectAll={selectAll}
            selectNew={selectNew}
          />
        </div>
        {/* Notification list */}
        <section className='grid gap-2 mx-2 lg:mx-6'>
          {displayContacts === 'new-contacts' && (
            <ContactsContainer contacts={allContacts} />
          )}
          {displayContacts === 'all-contacts' && (
            <ContactsContainer contacts={allContacts} />
          )}
        </section>
      </section>
    </>
  );
}

export default ContactsPhone;
