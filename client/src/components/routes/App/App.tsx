import React from 'react';
import { graphql } from 'react-relay';
import { renderRoutes } from 'react-router-config';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { AppQuery } from './__generated__/AppQuery.graphql';
import { AppHeader } from '../..';
import { AppProps } from './types';

const appQuery = graphql`
  query AppQuery {
    me {
      firstName
      lastName
    }
  }
`;

const App: React.FC<AppProps> = ({ route }) => {
  const { me } = useLazyLoadQuery<AppQuery>(appQuery, {});

  return (
    <div>
      <AppHeader />
      <main>
        {me.firstName} {me.lastName} is great!
        {renderRoutes(route.routes)}
      </main>
    </div>
  );
};

export default App;
