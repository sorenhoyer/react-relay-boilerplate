import React, { useContext } from 'react';
import { AuthContext } from '../../providers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute: React.FC<{ component: React.FC<any>; props: any }> = ({ component, props }): JSX.Element => {
  const { isAuthenticated, signinRedirect } = useContext(AuthContext);

  const Component = component;

  if (!!Component && isAuthenticated()) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  }

  signinRedirect();

  return <span>loading</span>;
};

export default PrivateRoute;
