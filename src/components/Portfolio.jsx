import React from 'react';
import { useState } from 'react';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';

const Portfolio = (props) => {
  const { projects, filters, selected } = props;
  const [selectedFilter, changeSelectedFilter] = useState(selected);
  const [shownImages, changeShownImages] = useState(projects);

  const handleSelect = (filter) => () => {
    changeSelectedFilter(filter);
    const newShownImages = filter === 'All' ? projects : projects.filter(({ category }) => category === filter);
    changeShownImages(newShownImages);
  };

  return (
    <div className='container'>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectedFilter={handleSelect} />
      <ProjectList
        projects={shownImages} />
    </div>
  );
};

Portfolio.defaultProps = {
  selected: 'All',
};

export default Portfolio;
