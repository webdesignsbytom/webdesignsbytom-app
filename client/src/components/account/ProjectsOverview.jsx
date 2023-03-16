import React from 'react';
import LoadingSpinner from '../utils/LoadingSpinner';

function ProjectsOverview({ userProjects, projectResponse }) {
  
  return (
    <div>
      <h2>ProjectsOverview</h2>

      {projectResponse.status === false && (
        <div className='grid grid-rows-1'>
          <LoadingSpinner height={'h-5 lg:h-12'} width={'w-5 lg:w-12'} />
        </div>
      )}

      {projectResponse.status === true && userProjects.length === 0 && (
        <article>Nothing to display - No Saved Projects</article>
      )}

      {projectResponse.status === true && userProjects.length > 0 && (
        <ul className='w-full'>
          {userProjects.map((project, index) => {
            return <li key={index}>{project.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default ProjectsOverview;
