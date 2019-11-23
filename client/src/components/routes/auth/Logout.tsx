import React, { useContext } from 'react';
import { AuthContext } from '../../../providers';

const Logout: React.FC<{}> = () => {
  const { logout } = useContext(AuthContext);

  logout();

  return <span>loading</span>;
};

export default Logout;
