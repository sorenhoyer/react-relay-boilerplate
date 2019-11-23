import React, { useContext } from 'react';
import { AuthContext } from '../../../providers';

const LogoutCallback: React.FC<{}> = () => {
  const { signoutRedirectCallback } = useContext(AuthContext);

  signoutRedirectCallback();

  return <span>loading</span>;
};

export default LogoutCallback;
