import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DesignElement from './DesignElement';
import OptionsNav from './OptionsNav';
// Context
import { UserContext } from '../../context/UserContext';
import client from '../../utils/client';
import { designTemplate } from '../../utils/utils';

function Design() {
  const { user } = useContext(UserContext);
  const [displayElement, setDisplayElement] = useState('nav');
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [openDesign, setOpenDesign] = useState(designTemplate);
  console.log('1. openDesign', openDesign);

  useEffect(() => {
    console.log('get designs');
    if (user.id) {
      client
        .get(`/designs/user-designs/${user.id}`)
        .then((res) => {
          console.log('AAAA')
          if (res.data.data.designs.length === 0) {
            console.log('BBBB')
            return;
          } else {
            console.log('XXXX')
            setSavedDesigns(res.data.data.designs);
            setOpenDesign(res.data.data.designs[0]);
          }
        })
        .catch((err) => console.error('Unable to get designs', err.response));
    }
  }, [user.id]);

  return (
    <div className='min-h-screen lg:left-0 overflow-hidden'>
      <Navbar />
      <section className='grid grid-rows-reg lg:grid-rows-none lg:grid-cols-one min-h-[calc(100vh-64px)] lg:border-t-2 lg:border-solid lg:border-black'>
        {/* Side bar */}
        <OptionsNav
          displayElement={displayElement}
          setDisplayElement={setDisplayElement}
          savedDesigns={savedDesigns}
          openDesign={openDesign}
          setOpenDesign={setOpenDesign}
        />
        {/* Preview section */}
        <DesignElement
          displayElement={displayElement}
          setDisplayElement={setDisplayElement}
          savedDesigns={savedDesigns}
          openDesign={openDesign}
          setOpenDesign={setOpenDesign}
        />
      </section>
    </div>
  );
}

export default Design;
