import React, { Suspense } from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery } from 'react-relay/hooks';
import { PreloadedQuery } from 'react-relay/lib/relay-experimental/EntryPointTypes';
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

interface Props {
  prepared: {
    appQuery: PreloadedQuery<AppQuery>;
  };
  children: React.ReactChildren;
}

const App: React.FC<Props> = ({ children, prepared }) => {
  const { me } = usePreloadedQuery(appQuery, prepared.appQuery);

  return (
    <div>
      <AppHeader />
      <main>
        {me.firstName} {me.lastName} is great!
        <Suspense fallback="Loading...">{children}</Suspense>
      </main>
    </div>
  );
};

export default App;
