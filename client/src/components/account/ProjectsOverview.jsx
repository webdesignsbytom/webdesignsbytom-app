import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { statusResults } from '../../users/utils/utils';
import LoadingSpinner from '../utils/LoadingSpinner';
import { SubmitButton } from '../utils/SubmitButtons';

function ProjectsOverview({ userProjects, projectResponse }) {
  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  let navigate = useNavigate();

  const buyProject = () => {
    navigate('/new-project', { replace: true });
  };

  return (
    <section>
      <div className='mb-2'>
        <h2>Open Projects</h2>
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

      {projectResponse.status === false && userProjects.length === 0 && (
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
