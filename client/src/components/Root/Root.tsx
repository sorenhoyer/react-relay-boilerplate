import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../../relay/RelayEnvironment';
import routes from '../../routes';
import RoutingContext from '../../routing/RoutingContext';
import RouterRenderer from '../../routing/RouteRenderer';
import createRouter from '../../routing/createRouter';

// Uses the custom router setup to define a router instance that we can pass through context
const router = createRouter(routes);

const Root: React.FC<{}> = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RoutingContext.Provider value={router.context}>
        {/* Render the active route */}
        <RouterRenderer />
      </RoutingContext.Provider>
    </RelayEnvironmentProvider>
  );
};

export default Root;
