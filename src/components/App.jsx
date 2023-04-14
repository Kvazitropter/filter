import React from 'react';
import Portfolio from './Portfolio.jsx';
import images from '../assets/portfolioImages.js';
import filters from '../assets/imageFilters.js';

const App = () => (
  <Portfolio projects={images} filters={filters} />
);

export default App;
