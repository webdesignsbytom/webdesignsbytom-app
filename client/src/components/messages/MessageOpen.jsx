import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../nav/Navbar';

function MessageOpen() {
  const navigate = useNavigate();
  const location = useLocation();

  const { subject, content, viewed, starred, createdAt } = location.state;
  console.log('subject: ', subject);
  console.log('location: ', location);
  console.log('navigate: ', navigate);
  return (
    <div className='grid lg:grid-rows-reg bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
      <Navbar />
      {/* Main */}
      <section className='grid lg:grid-rows-1 lg:max-h-[calc(100vh-64px)] overflow-hidden border-2 border-solid border-black rounded m-1'>

      </section>
    </div>
  );
}

export default MessageOpen;
