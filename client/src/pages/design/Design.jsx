import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DesignElement from './DesignElement';
import OptionsNav from './OptionsNav';
import { UserContext } from '../../context/UserContext';
import client from '../../utils/client';

function Design() {
  const { user } = useContext(UserContext)

  const [displayElement, setDisplayElement] = useState('nav');
  const [savedDesigns, setSavedDesigns] = useState([])

  console.log('DESIGN', user);

  useEffect(() => {
    client
    .get(`/designs/user-designs/${user.id}`)
    .then((res) => {
      console.log('res', res.data)
      setSavedDesigns(res.data.data.designs);
    })
    .catch((err) => console.error('Unable to get unseen notifications', err.response));
  }, [])

  return (
    <div className='max-h-screen lg:overflow-hidden lg:left-0'>
      <Navbar />
      <section className='grid grid-rows-reg lg:grid-rows-none lg:grid-cols-one min-h-[calc(100vh-64px)] lg:border-t-2 lg:border-solid lg:border-black'>
        {/* Side bar */}
        <OptionsNav
          displayElement={displayElement}
          setDisplayElement={setDisplayElement}
          savedDesigns={savedDesigns}
        />
        {/* Preview section */}
        <DesignElement displayElement={displayElement} />
      </section>
    </div>
  );
}

export default Design;
