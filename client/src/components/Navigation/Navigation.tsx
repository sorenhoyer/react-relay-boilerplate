import React, { useContext } from 'react';
import { AuthContext } from 'react-app-auth';
import Link from '../../routing/Link';

const Navigation: React.FC<any> = ({ me }) => {
  const { signinRedirect } = useContext(AuthContext);

  return (
    <nav>
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
    </nav>
  );
};

export default Navigation;
