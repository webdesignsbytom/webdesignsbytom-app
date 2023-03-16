import React from 'react';

function AdminProjects({ projects }) {
  return (
    <ul className='w-full'>
      {projects.map((project, index) => {
        return (
          <li key={index} className='w-full cursor-pointer border-b-2 border-solid border-black'>
            <h3>Project Name:{project.name}</h3>
            <h3>Project owner:{project.userId}</h3>
            <h3>Project owner:{project.ownerName}</h3>
          </li>
        );
      })}
    </ul>
  );
}

export default AdminProjects;
