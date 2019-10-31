import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import routes from '../../routes';
import environment from '../../environment';

const Root: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback={<div>Loading....</div>}>{renderRoutes(routes)}</Suspense>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  );
};

export default Root;
