import React, { useContext } from 'react';
import { AuthContext } from 'react-app-auth';
// import RoutingContext from '../../../routing/RoutingContext';

const Admin: React.FC<{}> = () => {
  const { isAuthenticated, signinRedirect } = useContext(AuthContext);
  // const router = useContext(RoutingContext);

  if (!isAuthenticated()) {
    // router.history.push('/login');
    signinRedirect();
    return <div>Redirecting to login page...</div>;
  }

  return <div>Admin</div>;
};

export default Admin;
