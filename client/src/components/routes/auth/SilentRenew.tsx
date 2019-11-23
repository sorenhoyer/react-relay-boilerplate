import React, { useContext } from 'react';
import { AuthContext } from '../../../providers';

const SilentRenew: React.FC<{}> = () => {
  const { signinSilentCallback } = useContext(AuthContext);

  signinSilentCallback();

  return <span>loading</span>;
};

export default SilentRenew;
