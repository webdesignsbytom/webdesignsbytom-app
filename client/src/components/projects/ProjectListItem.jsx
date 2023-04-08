import React from 'react';
// Icons
import EyeIcon from '../../assets/svg/eye.svg';
import BinIcon from '../../assets/svg/bin.svg';

function ProjectListItem({ project, openProject }) {
  const { name, domainName, startDate } = project;
  
  return (
    <li onClick={() => openProject(project)} className='p-1 cursor-pointer'>
      <article className='flex items-center justify-between'>
        <section className='flex items-center'>
          <h4 className='capitalize pr-4'>Project: {name} </h4>
          <h4 className='capitalize pr-4'>Domain: {domainName}</h4>
          <h4 className='capitalize'>Start Date: {startDate}</h4>
        </section>
        <section className='flex'>
          <img
            src={EyeIcon}
            className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
            alt='seen button'
          />
          <img
            src={BinIcon}
            className='w-6 h-6 cursor-pointer transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
            alt='delete button'
          />
        </section>
      </article>
    </li>
  );
}

export default ProjectListItem;
