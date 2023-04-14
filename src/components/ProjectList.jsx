import React from 'react';
import { uniqueId } from 'lodash';

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className='projects'>
      {projects.map(({ img }) => (
        <img key={uniqueId()} src={img} alt='project' className='project' />
      ))}
    </div>
  );
};

export default ProjectList;
