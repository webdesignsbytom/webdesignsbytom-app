import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import { TiArrowBack } from 'react-icons/ti';

function ProjectOverview() {
  return (
    <div className='relative grid h-screen dark:bg-black '>
      <section className='my-4 absolute mx-4'>
        <Link to='/account'>
          <div className='p-1 flex items-center justify-center bg-main-colour rounded-xl text-white w-fit'>
            <TiArrowBack size={30} />
          </div>
        </Link>
      </section>
      <main className='grid items-center justify-center'>
        <article className='dark:text-gray-100 text-center'>
          <h1 className='text-4xl mb-2'>Project Overview</h1>
          <p>Project details will update here</p>
        </article>
      </main>
    </div>
  );
}

export default ProjectOverview;
