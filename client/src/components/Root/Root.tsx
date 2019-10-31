import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from '../../relay/environment';
import routes from '../../routes';

const Root: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback={<div>Loading....</div>}>{renderRoutes(routes)}</Suspense>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  );
};

export default Root;
