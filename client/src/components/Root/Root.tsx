import { UserManagerSettings } from 'oidc-client';
import React from 'react';
import { AuthProvider } from 'react-app-auth';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../../relay/RelayEnvironment';
import routes from '../../routes';
import RoutingContext from '../../routing/RoutingContext';
import RouterRenderer from '../../routing/RouteRenderer';
import createRouter from '../../routing/createRouter';

const router = createRouter(routes);

const userManagerSettings: UserManagerSettings = {
  authority: process.env.REACT_RELAY_BOILERPLATE_OIDC_AUTHORITY,
  client_id: process.env.REACT_RELAY_BOILERPLATE_OIDC_CLIENT_ID,
  // post_logout_redirect_uri: process.env.REACT_RELAY_BOILERPLATE_OIDC_POST_LOGOUT_REDIRECT_URL,
  automaticSilentRenew: process.env.REACT_RELAY_BOILERPLATE_OIDC_AUTOMATIC_SILENT_RENEW === 'true',
  redirect_uri: process.env.REACT_RELAY_BOILERPLATE_OIDC_REDIRECT_URI,
  response_type: process.env.REACT_RELAY_BOILERPLATE_OIDC_RESPONSE_TYPE,
  scope: process.env.REACT_RELAY_BOILERPLATE_OIDC_SCOPE,
  extraQueryParams: {
    audience: process.env.REACT_RELAY_BOILERPLATE_GRAPHQL_ENDPOINT,
  },
  metadata: {
    issuer: process.env.REACT_RELAY_BOILERPLATE_OIDC_ISSUER,
    authorization_endpoint: process.env.REACT_RELAY_BOILERPLATE_OIDC_AUTHORIZATION_ENDPOINT,
    token_endpoint: process.env.REACT_RELAY_BOILERPLATE_OIDC_TOKEN_ENDPOINT,
    userinfo_endpoint: process.env.REACT_RELAY_BOILERPLATE_OIDC_USERINFO_ENDPOINT,
    revocation_endpoint: process.env.REACT_RELAY_BOILERPLATE_OIDC_REVOCATION_ENDPOINT,
    jwks_uri: process.env.REACT_RELAY_BOILERPLATE_OIDC_JWKS_URI,
    end_session_endpoint: `https://dev-nzs3g0ik.auth0.com/v2/logout?returnTo=${encodeURIComponent(
      process.env.REACT_RELAY_BOILERPLATE_OIDC_END_SESSION_ENDPOINT,
    )}&client_id=${process.env.REACT_RELAY_BOILERPLATE_OIDC_CLIENT_ID}`,
  },
};

const Root: React.FC<{}> = () => {
  return (
    <AuthProvider
      userManagerSettings={userManagerSettings}
      accessTokenStorageKey="react-relay-boilerplate-access-token"
      idTokenStorageKey="react-relay-boilerplate-id-token"
      postSignoutRedirectCallbackUri={process.env.REACT_RELAY_BOILERPLATE_OIDC_POST_LOGOUT_REDIRECT_URL}
    >
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <RoutingContext.Provider value={router.context}>
          <RouterRenderer />
        </RoutingContext.Provider>
      </RelayEnvironmentProvider>
    </AuthProvider>
  );
};

export default Root;
