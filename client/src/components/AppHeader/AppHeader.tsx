import React, { useContext } from 'react';
import Link from '../../routing/Link';
import { AuthContext } from '../../providers';

const AppHeader: React.FC<any> = ({ me }) => {
  const { signinRedirect } = useContext(AuthContext);

  return (
    <div>
      <h3>AppHeader</h3>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      {me && <Link to="/admin">Admin</Link>}
      {me && <Link to="/profile">{me.firstName}</Link>}
      {me ? (
        <Link to="/logout">Logout</Link>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          onClick={(e): void => {
            e.preventDefault();
            signinRedirect();
          }}
        >
          Login
        </a>
      )}
    </div>
  );
};

export default AppHeader;
