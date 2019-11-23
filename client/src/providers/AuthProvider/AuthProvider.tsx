import React from 'react';
import AuthService from './AuthService';
import { AuthContext, ProviderProps } from './types';

const Context = React.createContext<AuthContext | null>(null);

const { Consumer } = Context;

const Provider: React.FC<ProviderProps> = ({ children, settings }) => {
  return <Context.Provider value={new AuthService(settings)}>{children}</Context.Provider>;
};

export { Consumer as AuthConsumer, Context as AuthContext, Provider as AuthProvider };
