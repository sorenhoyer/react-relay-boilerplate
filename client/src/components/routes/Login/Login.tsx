import React, { useContext } from 'react';
import RoutingContext from '../../../routing/RoutingContext';
import { AuthContext } from '../../../providers';

const Login: React.FC<{}> = () => {
  const { isAuthenticated, signinRedirect } = useContext(AuthContext);
  const router = useContext(RoutingContext);

  if (isAuthenticated()) {
    router.history.push('/');
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button type="button" onClick={(): void => signinRedirect()}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
