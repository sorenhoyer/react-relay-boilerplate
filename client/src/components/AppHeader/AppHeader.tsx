import React from 'react';
import Link from '../../routing/Link';

const AppHeader: React.FC<{}> = () => {
  return (
    <div>
      <h3>AppHeader</h3>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default AppHeader;
