import React from 'react';
import { Link } from 'react-router-dom';

const StudyListContainer = () => {
  return (
    <div>
      <h1>Study List Route</h1>
      <Link to="/viewer/1234">Go to Viewer route</Link>
    </div>
  );
};

export default StudyListContainer;
