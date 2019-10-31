import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader: React.FC<any> = () => {
  return (
    <div>
      <h3>AppHeader</h3>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default AppHeader;
