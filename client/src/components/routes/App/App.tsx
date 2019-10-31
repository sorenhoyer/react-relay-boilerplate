import React from 'react';
import { graphql } from 'react-relay';
import { renderRoutes } from 'react-router-config';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { AppQueryResponse } from './__generated__/AppQuery.graphql';
import { AppHeader } from '../..';

const AppQuery = graphql`
  query AppQuery {
    me {
      id
      firstName
      lastName
    }
  }
`;

const App: React.FC<any> = ({ route }) => {
  const data = useLazyLoadQuery(AppQuery, {}) as AppQueryResponse;

  return (
    <div>
      <AppHeader />
      <main>
        {data.me.firstName} is great!
        {renderRoutes(route.routes)}
      </main>
    </div>
  );
};

export default App;
