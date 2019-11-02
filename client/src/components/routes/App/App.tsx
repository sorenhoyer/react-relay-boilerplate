import React from 'react';
import { graphql } from 'react-relay';
import { renderRoutes } from 'react-router-config';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { AppQuery } from './__generated__/AppQuery.graphql';
import { AppHeader } from '../..';

const appQuery = graphql`
  query AppQuery {
    me {
      firstName
      lastName
    }
  }
`;

const App: React.FC<any> = ({ route }) => {
  const data = useLazyLoadQuery<AppQuery>(appQuery, {});

  return (
    <div>
      <AppHeader />
      <main>
        {data.me.firstName} {data.me.lastName} is great!
        {renderRoutes(route.routes)}
      </main>
    </div>
  );
};

export default App;
