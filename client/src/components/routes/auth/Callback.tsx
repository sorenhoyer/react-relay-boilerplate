import React, { useContext } from 'react';
import { AuthContext } from '../../../providers';

const Callback: React.FC<{}> = () => {
  const { signinRedirectCallback } = useContext(AuthContext);

  signinRedirectCallback();

  return <span>loading</span>;
};

export default Callback;
