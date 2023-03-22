import React, { useState } from 'react';
// Utils
import { statusResults } from '../../users/utils/utils';
import LoadingSpinner from '../utils/LoadingSpinner';
import { SubmitButton } from '../utils/SubmitButtons';

function ProjectsOverview({ userProjects, projectResponse }) {
  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  const buyProject = () => {
    console.log('project');
  };

  return (
    <section>
      <div className='mb-2'>
        <h2>Projects Overview</h2>
      </div>
      <section className='mb-2'>
        <SubmitButton
          loadingAnimation={updateAnimation}
          mainButtonContent={mainButtonContent}
          responseMessage={updateResponseMessage}
          buttonMessage='Buy New Website'
          spinnerHeight='h-5'
          spinnerWidth='w-5'
          action={buyProject}
        />
      </section>
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
    </section>
  );
}

export default ProjectsOverview;
